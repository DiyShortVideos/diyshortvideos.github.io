
build: node_modules csv_to_json
	node build.js

node_modules: package.json
	npm install

csv_to_json:
	./csv_to_json.rb

.PHONY: build
