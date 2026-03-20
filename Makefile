# OpenOcta 构建
# 构建顺序：前端 -> 复制 embed 资源 -> 后端

.PHONY: ui embed go launcher build clean release snapshot docker run run-ui prepare-wails-icons wails wails-nsis wails-dmg wails-dev

# 构建前端（输出到 src/embed/frontend）
ui:
	cd ui && npm install && npm run build

# 从 git tag 设置版本，复制 config-schema、openocta.json.example、.env 到 embed 目录
embed: ui
	./scripts/set-version.sh
	@test -f src/config-schema.json && cp src/config-schema.json src/embed/ || true
	@test -f src/openocta.json.example && cp src/openocta.json.example src/embed/ || true
	@test -f src/.env && cp src/.env src/embed/ || true

# 构建 Go 二进制（需先执行 embed）
go: embed
	cd src && go build -ldflags "-s -w" -o ../openocta ./cmd/openocta

# 构建桌面启动器（Windows/macOS）
launcher: embed
	cd src && go build -ldflags "-s -w" -o ../openocta-launcher ./cmd/openocta-launcher

# 完整构建（默认）
build: go

# 清理
clean:
	rm -rf dist src/embed/frontend src/embed/config-schema.json src/embed/openocta.json.example openocta openocta.exe openocta-launcher openocta-launcher.exe src/build/bin

# GoReleaser 快照构建（不发布）
snapshot:
	goreleaser release --snapshot --clean --skip=publish

# GoReleaser 正式发布
release:
	goreleaser release --clean

# 本地 Docker 构建（使用 deploy/Dockerfile 多阶段构建）
docker:
	docker build -f deploy/Dockerfile -t openocta:local .

# 开发：构建并启动 Gateway（端口 18900）
run: build
	./openocta gateway run

# 开发：仅启动前端开发服务器（端口 5173，需另行启动 Gateway）
run-ui:
	cd ui && npm run dev

# 将横版 logo 缩放到最长边 ≤256（ICO 单字节尺寸限制）。有 macOS sips 时自动更新；否则依赖已提交的 png。
imgs/openocta_logo_wails.png: imgs/openocta_logo.png
	@if command -v sips >/dev/null 2>&1; then \
		sips -Z 256 "$(CURDIR)/imgs/openocta_logo.png" --out "$(CURDIR)/imgs/openocta_logo_wails.png"; \
	else \
		test -f "$(CURDIR)/imgs/openocta_logo_wails.png" || (echo "ERROR: 缺少 imgs/openocta_logo_wails.png。请在 macOS 执行: sips -Z 256 imgs/openocta_logo.png --out imgs/openocta_logo_wails.png"; exit 1); \
	fi

# OpenOcta 品牌：生成 Wails appicon.ico 与 NSIS 使用的 src/build/windows/icon.ico
prepare-wails-icons: imgs/openocta_logo_wails.png
	@mkdir -p src/build src/build/windows
	node "$(CURDIR)/scripts/png-to-ico.mjs" "$(CURDIR)/imgs/openocta_logo_wails.png" "$(CURDIR)/src/build/appicon.ico"
	@cp "$(CURDIR)/src/build/appicon.ico" "$(CURDIR)/src/build/windows/icon.ico"

# Wails 桌面应用（单二进制，内嵌 Gateway，端口 18900）
wails: embed prepare-wails-icons
	cd src && wails build -skipbindings

# Windows NSIS 安装器（需在 Windows + NSIS 环境；逻辑见 ./build.sh wails-nsis）
wails-nsis:
	./build.sh wails-nsis

# Wails + 打包 .dmg（macOS），产物在 dist/OpenOcta.app 和 dist/OpenOcta-<version>.dmg
wails-dmg: wails
	./deploy/macos/build-app.sh

# Wails 开发模式（热重载）
wails-dev: embed
	cd src && wails dev
