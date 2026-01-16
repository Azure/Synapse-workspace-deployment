.PHONY: build

build:
	cd build_and_deploy && npm ic && npm run build
	ncc build build_and_deploy/dist/main.js -o dist

