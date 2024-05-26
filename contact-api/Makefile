build:
	@echo "🏗️  Compiling Go binary for AWS lambda"
	@GOOS=linux GOARCH=amd64 go build -o out/bootstrap
	@echo "⚙️   Making bootstrap executable"
	@chmod +x out/bootstrap
	@echo "📦  Creating ZIP file"
	@zip out/function.zip out/bootstrap
	@echo "🚀  Build complete"
