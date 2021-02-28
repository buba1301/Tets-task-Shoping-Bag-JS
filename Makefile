dev:
	yarn run build:dev

prod:
	yarn run build:prod

start:
	yarn run start

lint:
	npx eslint ./src

stylelint:
	npx stylelint "**/*.scss"

pretty:
	yarn pretty-quick --staged

test:
	npx jest --watch

serve:
	node dist/server.js
