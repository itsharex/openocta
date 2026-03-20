# OpenOcta Wails 打包安装说明

本文档说明如何使用 Wails 构建 macOS / Windows 桌面应用安装包，以及相关构建脚本、Makefile、GoReleaser 的协作关系。

---

## 一、构建体系概览

| 入口 | 用途 | 产物 |
|------|------|------|
| `make wails` | Wails 桌面应用（当前平台） | `src/build/bin/OpenOcta.app`（macOS）或 `OpenOcta.exe`（Windows） |
| `make wails-dmg` | macOS .dmg 安装镜像 | `dist/OpenOcta.app`、`dist/OpenOcta-<version>.dmg` |
| `./build.sh wails` | 同 `make wails`，并复制到 `dist/` | `dist/` 下的 .app 或 .exe |
| `./build.sh wails-nsis` | Windows NSIS 安装器（**需在 Windows 上执行**） | `src/build/bin/OpenOcta-amd64-installer.exe` |
| `./deploy/macos/build-app.sh` | macOS .app + .dmg 打包 | `dist/OpenOcta.app`、`dist/OpenOcta-<version>.dmg` |

**Linux** 使用 GoReleaser 构建（deb/rpm/tar.gz），不涉及 Wails，参见 `.goreleaser.yaml` 与 `deploy/dist-README.md`。

### macOS 构建注意

- **`make wails` / `make wails-dmg` 请勿使用 `sudo`**。若曾用 root 执行，仓库或 `ui/node_modules` 可能出现 **root 属主**，在普通用户下会表现为「无法保存 / 只读」，需自行 `sudo chown -R "$(whoami)" .` 修复（慎用，先确认路径）。
- **`.app` 包内**常见只读资源（如 `Resources` 下文件），属正常；**不应**与「项目源码被锁」混淆。

---

## 二、构建前置条件

### 1. 通用依赖

- **Go** 1.21+
- **Node.js** 18+（用于前端构建）
- **Git**（用于版本号 `git describe --tags`）

### 2. Wails 依赖

- **Wails CLI**：`go install github.com/wailsapp/wails/v2/cmd/wails@latest`
- **macOS**：Xcode Command Line Tools、`hdiutil`（系统自带）
- **Windows**：需在 **Windows 环境** 下执行 `wails build`。
- **Windows 安装器（NSIS）**：需安装 [NSIS](https://nsis.sourceforge.io/Download)。Wails 通过 `makensis.exe` 打安装包；若找不到会**静默跳过**，只产出 `OpenOcta.exe`。在 **Git Bash** 下若已装 NSIS 仍报 `makensis not found`，多半是 MSYS 传给 Windows 进程的 `PATH` 格式问题——请使用本仓库的 `./build.sh wails-nsis`（脚本会用 `cygpath` 把 `PATH` 转成 Windows 分号列表并把 NSIS 目录提前），或将 `C:\Program Files (x86)\NSIS` 加入**系统/用户环境变量 PATH** 后用 **cmd / PowerShell** 执行 `wails build`。

### 3. 版本号

构建前会通过 `scripts/set-version.sh` 设置版本：

- 从 `git describe --tags` 或环境变量 `VERSION` 获取
- 写入 `src/.env`（`OPENOCTA_BUNDLED_VERSION`）和 `ui/package.json`

---

## 三、构建流程说明

### 3.1 资源嵌入顺序

Wails 构建前会执行 `make embed`（由 `wails.json` 的 `preBuildHooks` 触发；hook 运行在 **`src/build/bin`**，故使用 `make -C ../../.. embed` 回到仓库根目录再执行）：

```
make embed
  ├── make ui          # 构建前端到 src/embed/frontend
  ├── set-version.sh   # 设置版本号
  └── 复制 config-schema.json、openocta.json.example、.env 到 src/embed/
```

因此 **无需手动执行 `make embed`**，`make wails` 会自动完成。

### 3.2 macOS 打包

#### 方式一：Makefile（推荐）

```bash
# 仅构建 .app
make wails

# 构建 .app 并打包 .dmg
make wails-dmg
```

- `.app` 输出：`src/build/bin/OpenOcta.app`
- `wails-dmg` 会调用 `./deploy/macos/build-app.sh`，产物在 `dist/`

#### 方式二：deploy 脚本

```bash
# 构建 .app + .dmg
./deploy/macos/build-app.sh

# 仅构建 .app，不生成 .dmg
./deploy/macos/build-app.sh --no-dmg
```

- 产物：`dist/OpenOcta.app`、`dist/OpenOcta-<version>.dmg`
- 版本号来自 `git describe --tags`

#### 用户安装步骤

1. 双击 .dmg 打开
2. 将 `OpenOcta` 拖拽到「应用程序」文件夹
3. 首次运行若提示「无法验证开发者」：右键 → 打开 → 再次确认

---

### 3.3 Windows 打包

#### 重要：必须在 Windows 上执行

`wails build -platform windows/amd64` 需在 Windows 环境运行，无法在 macOS/Linux 上交叉编译 Wails 桌面应用。

#### 方式一：build.sh wails-nsis（推荐）

在 **Git Bash 或 MSYS2** 下执行（勿在纯 WSL Linux 内执行本命令）：

```bash
./build.sh wails-nsis
```

或 `make wails-nsis`（即调用上述脚本）。

脚本会：检测/补全 **NSIS `makensis`** → `make embed` → `wails build -platform windows/amd64 -nsis -skipbindings` → 校验已生成 `src/build/bin/*-installer.exe` 并复制 `*.exe` 到 `dist/`。

- 使用 Wails / 项目 NSIS 模板（`src/build/windows/installer/project.nsi`）
- 产物名由模板定义，一般为 **`src/build/bin/OpenOcta-amd64-installer.exe`**
- 安装器会检测/安装 WebView2 运行时

#### 方式二：仅构建 .exe（不生成安装器）

```bash
make wails   # 在 Windows 上执行
```

- 产物：`src/build/bin/OpenOcta.exe`（便携版）

#### 方式三：自定义 NSIS 安装器（openocta + launcher）

`deploy/windows/build-installer.ps1` 用于 **CLI + Launcher** 模式（非 Wails 单二进制）：

```powershell
# 需先构建 openocta 和 openocta-launcher
make build    # 产出 openocta
make launcher # 产出 openocta-launcher

.\deploy\windows\build-installer.ps1 `
  -OpenOctaExe ".\openocta.exe" `
  -LauncherExe ".\openocta-launcher.exe" `
  -OutDir ".\dist"
```

- 依赖：NSIS（`makensis.exe`）已安装；需 `deploy/windows/license.txt`（安装器许可页）
- 产物：`OpenOcta-Setup.exe`
- 安装内容：`openocta.exe`、`openocta-launcher.exe`，创建开始菜单/桌面快捷方式，注册开机自启

---

## 四、构建产物与目录结构

### 4.1 输出目录

| 平台 | 默认输出 | 复制到 dist/ 后 |
|------|----------|----------------|
| macOS | `src/build/bin/OpenOcta.app` | `dist/OpenOcta.app` |
| macOS .dmg | - | `dist/OpenOcta-<version>.dmg` |
| Windows .exe | `src/build/bin/OpenOcta.exe` | `dist/OpenOcta.exe` |
| Windows 安装器 | `src/build/bin/OpenOcta-amd64-installer.exe` | `dist/`（build.sh 会复制） |

### 4.2 清理

```bash
make clean
# 或
./build.sh clean
```

会删除：`dist/`、`src/embed/frontend`、`openocta`、`openocta.exe`、`openocta-launcher`、`src/build/bin` 等。

---

## 五、与 GoReleaser / build.sh 的关系

| 命令 | 说明 |
|------|------|
| `./build.sh build` | 完整构建（ui → embed → go），产出 Linux 二进制 `openocta` |
| `./build.sh wails` | Wails 桌面应用，当前平台 |
| `./build.sh wails-nsis` | Windows NSIS 安装器（仅 Windows） |
| `./build.sh snapshot` | GoReleaser 快照（Linux deb/rpm/tar.gz） |
| `./build.sh release` | GoReleaser 正式发布 |

GoReleaser（`.goreleaser.yaml`）仅构建 **Linux** 服务端二进制；Windows/macOS 桌面版由 Wails 单独构建。

---

## 六、首次配置与运行

- **配置文件**：`~/.openocta/openocta.json`（或 `%APPDATA%\openocta\` 等，见 `paths` 包）
- **默认端口**：18900
- **访问地址**：`http://127.0.0.1:18900`

用户安装与首次配置详见 `deploy/dist-README.md`（会随打包产物一起分发）。

---

## 七、常见问题

### Q: 在 macOS 上能构建 Windows 安装器吗？

不能。Wails 的 Windows 构建需在 Windows 上执行。可使用 CI（如 GitLab Runner on Windows）或虚拟机。

### Q: wails build 报错 "embed" 相关？

确保 `make embed` 已成功执行（或由 `make wails` 自动触发），且 `src/embed/frontend` 存在。

### Q: 加了 `-nsis` 但只有 OpenOcta.exe，没有 `*-installer.exe`？

Wails 依赖系统命令 **`makensis`**。未安装 NSIS 或未加入 PATH 时，Wails 只会打印 *Warning: makensis not found* 并跳过安装包。请安装 NSIS 后重试，或使用 `./build.sh wails-nsis`（会事先检查并在常见路径下尝试找到 `makensis.exe`）。

### Q: Windows 安装器需要用户安装 WebView2 吗？

Wails 内置 NSIS 会检测 WebView2；若未安装，安装器会引导用户安装。

### Q: 如何修改应用图标？

- **Windows 桌面 / 安装向导**：品牌图稿为 `imgs/openocta_logo.png`。构建时 `make prepare-wails-icons` 会将其缩小为 `imgs/openocta_logo_wails.png`（最长边 256，满足 ICO 限制），再生成 `src/build/appicon.ico`（嵌入 `OpenOcta.exe`）与 `src/build/windows/icon.ico`（NSIS `MUI_ICON` / 卸载向导）。更新 logo 后：在 macOS 上执行一次 `make imgs/openocta_logo_wails.png` 以刷新缩放图并提交；其他平台若无 `sips` 需依赖仓库中已提交的 `imgs/openocta_logo_wails.png`。
- **macOS**：仍可替换 `ui/public/favicon.ico`、`favicon-32.png` 等用于 Web；若需与品牌统一，可自行将同一套 ICO/ICNS 接到 `deploy/macos` 流程。
