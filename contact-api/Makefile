build:
	@echo "🏗️  Compiling Go binary for AWS lambda"
	@GOOS=linux GOARCH=amd64 go build -o out/bootstrap ./cmd/lambda
	@echo "⚙️   Making bootstrap executable"
	@cd out && chmod +x bootstrap
	@echo "📦  Creating ZIP file"
	@cd out && zip function.zip bootstrap
	@echo "🚀  Build complete"

dev:
	go run ./cmd/api
