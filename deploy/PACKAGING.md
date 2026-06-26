# OpenOcta Wails 打包安装说明

本文档说明如何使用 Wails 构建 macOS / Windows 桌面应用安装包，以及相关构建脚本、Makefile、GoReleaser 的协作关系。

---

## 一、构建体系概览

| 入口 | 用途 | 产物 |
|------|------|------|
| `make wails` | Wails 桌面应用（当前平台） | `src/build/bin/OpenOcta.app`（macOS）或 `OpenOcta.exe`（Windows） |
| `make wails-dmg` | macOS .dmg（当前机架构） | `dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg` |
| `make wails-dmg-signed` | macOS .dmg（gon 签名/公证 + staple） | `dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg` |
| `make wails-dmg-arm64` / `wails-dmg-amd64` | 分别打 Apple Silicon / Intel 的 .dmg | `dist-mac/OpenOcta-<version>-darwin-arm64.dmg` 等 |
| `make wails-dmg-arm64-signed` / `wails-dmg-amd64-signed` | 分别打 Apple Silicon / Intel 的 .dmg（gon 签名/公证 + staple） | `dist-mac/OpenOcta-<version>-darwin-arm64.dmg` 等 |
| `make wails-dmg-all` | 连续构建上述两个架构（仅 macOS） | 两个 `.dmg` |
| `make wails-dmg-all-signed` | 连续构建双架构 .dmg（gon 签名/公证 + staple） | 两个 `.dmg` |
| `./build.sh wails` | 同 `make wails`，并复制到 `dist/` | `dist/` 下的 .app 或 .exe |
| `./build.sh wails-dmg` | macOS .dmg（不签名/不公证） | `dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg` |
| `./build.sh wails-dmg-signed` | macOS .dmg（gon 签名/公证 + staple） | `dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg` |
| `./build.sh wails-nsis` | Windows NSIS 安装器（**需在 Windows 上执行**） | `src/build/bin/OpenOcta-amd64-installer.exe` |
| `./deploy/macos/build-app.sh` | macOS .app + .dmg 打包 | `dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg` |

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

# 构建 .app，使用 gon 签名/公证 + staple，然后打包 .dmg
# 需要环境变量：AC_USERNAME / AC_PASSWORD / AC_TEAM_ID（见 gon-sign.json）
make wails-dmg-signed
```

- `.app` 输出：`src/build/bin/OpenOcta.app`
- `wails-dmg` / `wails-dmg-signed` 会调用 `./deploy/macos/build-app.sh`，产物在 `dist-mac/`

#### 方式二：deploy 脚本

```bash
# 构建 .app + .dmg
./deploy/macos/build-app.sh

# 仅构建 .app，不生成 .dmg
./deploy/macos/build-app.sh --no-dmg
```

- 产物：`dist-mac/OpenOcta.app`、`dist-mac/OpenOcta-<version>.dmg`（`dist-mac` 与 GoReleaser 的 `dist/` 分离，避免 before 钩子里生成 DMG 后触发「dist is not empty」。）
- 版本号来自 `git describe --tags`

#### 使用 gon 对 .app 签名/公证（推荐用于分发）

本仓库通过 `gon` 对 `src/build/bin/OpenOcta.app` 做签名+公证，并在成功后 staple。

- 配置文件：`gon-sign.json`（已改为从环境变量读取凭据，避免明文泄露）
- 启用方式：设置 `OPENOCTA_GON=1`（`deploy/macos/build-app.sh` 会在打 DMG 前执行 `gon`）
- 需要的环境变量：
  - `AC_USERNAME`：Apple ID
  - `AC_PASSWORD`：App-Specific Password（建议在 Keychain/CI Secret 中注入，勿写入文件/仓库）
  - `AC_TEAM_ID`：Team ID

示例（本机）：

```bash
export AC_USERNAME="you@example.com"
export AC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
export AC_TEAM_ID="ABCDE12345"
make wails-dmg-signed
```

#### 双架构 .dmg（arm64 + amd64）

**不可**在 Linux 上交叉编译 Wails macOS 应用；请在 **本机 macOS** 或 **GitHub Actions `macos-latest`** 上执行。

```bash
make wails-dmg-all
# 或单独：
make wails-dmg-arm64
make wails-dmg-amd64

# 签名/公证版（gon）
make wails-dmg-all-signed
```

- 产物示例：`dist-mac/OpenOcta-<version>-darwin-arm64.dmg`、`dist-mac/OpenOcta-<version>-darwin-amd64.dmg`
- 若已由 Makefile 执行过 `wails build -platform ...`，可对 `deploy/macos/build-app.sh` 使用 `SKIP_MAKE_WAILS=1`（Makefile 已自动设置）。

#### GoReleaser 附加 DMG 与 GitHub Release

1. **钩子**（`.goreleaser.yaml` → `before.hooks`）：`scripts/goreleaser-wails-dmg.sh`  
   - 仅当 **`GORELEASER_INCLUDE_DMG=1`** 且在 **Darwin** 上运行时，会执行 `make embed` 并构建 DMG：  
     - 未设置 `OPENOCTA_GON=1`：执行 `make wails-dmg-all`  
     - 设置 `OPENOCTA_GON=1`：执行 `make wails-dmg-all-signed`（签名/公证 + staple）  
   - Linux CI 请勿设置该变量，钩子会跳过。

2. **上传 DMG**：`.goreleaser.yaml` 的 `release.extra_files` 已包含 `glob: ./dist-mac/OpenOcta*.dmg`（与 `deploy/macos/build-app.sh` 输出目录一致）；存在则随 Release 上传，不存在则跳过（Linux-only 流水线也可共用同一配置）。

   ```bash
   export GORELEASER_INCLUDE_DMG=1   # 仅 macOS 打 DMG 时需要
   export OPENOCTA_GON=1            # 可选：让 GoReleaser 产线生成“已签名/已公证”的 DMG
   export AC_USERNAME="you@example.com"
   export AC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
   export AC_TEAM_ID="ABCDE12345"
   goreleaser release --clean -f .goreleaser.yaml
   ```

   **勿**执行 `goreleaser -f .goreleaser.yaml -f <另一文件>`：当前 GoReleaser 只会采用**最后一个** `-f`，曾用副配置只写 `release` 时会导致 `builds` 退回默认（`main=.`），报错「does not contain a main function」。

3. **GitHub**：在 `.goreleaser.yaml` 的 `release` 中增加 `github` 段（`owner` / `name`），并设置 **`GITHUB_TOKEN`**（或与现有 `gitlab` 块并存，按你的发布目标启用）。

4. **推荐 CI**：单独 **macos-latest** job 负责「带 DMG 的完整 GoReleaser」；Linux job 可只做 deb/rpm（当前主配置即 Linux 二进制），避免在 Linux 上期待生成 `.dmg`。

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

- 依赖：NSIS（`makensis.exe`）已安装；需 `deploy/windows/license.txt`（安装器许可页，**UTF-8 带 BOM**，避免中文乱码）
- 仓库内 `license.txt` 已为 UTF-8 BOM；Wails 的 `project.nsi` 含 `Unicode true`，自定义脚本 `openocta-installer.nsi` 同样启用 Unicode
- 产物：`OpenOcta-Setup.exe`
- 安装内容：`openocta.exe`、`openocta-launcher.exe`，创建开始菜单/桌面快捷方式，注册开机自启

---

## 四、构建产物与目录结构

### 4.1 输出目录

| 平台 | 默认输出 | 复制到 dist/ 后 |
|------|----------|----------------|
| macOS | `src/build/bin/OpenOcta.app` | `dist-mac/OpenOcta.app` |
| macOS .dmg | - | `dist-mac/OpenOcta-<version>.dmg` |
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

| 命令                            | 说明 |
|-------------------------------|------|
| `./build.sh build`            | 完整构建（ui → embed → go），产出 Linux 二进制 `openocta` |
| `./build.sh wails`            | Wails 桌面应用，当前平台 |
| `./build.sh wails-dmg`        | macOS .dmg（不签名/不公证） |
| `./build.sh wails-dmg-signed` | macOS .dmg（gon 签名/公证 + staple；需 `AC_USERNAME/AC_PASSWORD/AC_TEAM_ID`） |
| `./build.sh wails-nsis`       | Windows NSIS 安装器（仅 Windows） |
| `./build.sh snapshot`         | GoReleaser 快照（Linux deb/rpm/tar.gz） |
| `d`                           | GoReleaser 正式发布 |

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

- **Windows 桌面 / 安装向导**：品牌图稿为 `imgs/openocta_logo.png`。`make prepare-wails-icons` 会生成 `imgs/openocta_logo_wails.png`（≤256px）、写入 **`src/build/appicon.png`**（Wails 据此生成 Windows 嵌入图标；仅替换 ICO 不够）、再生成 `src/build/appicon.ico` 与 `src/build/windows/icon.ico`。`wails.json` 的 `preBuildHooks` 已包含 `prepare-wails-icons`，避免在 `src` 目录直接 `wails build` 时仍用默认 `appicon.png`。若 Explorer 仍显示旧图标，可删除 `%LocalAppData%\IconCache.db` 后注销再试。
- **macOS**：仍可替换 `ui/public/logo.png`、`favicon-32.png` 等用于 Web；若需与品牌统一，可自行将同一套 ICO/ICNS 接到 `deploy/macos` 流程。
