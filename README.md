This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Variable environment

**_ for this project, you need to create a ".env" with those fields _**

- REACT_APP_HOST = host of development web server(ex: http://localhost:8080)
- REACT_APP_IMGUR_TOKEN=Client_id imgur

## Getting started

```bash
$ npx degit Karnak19/react-prettier-eslint-action my-app
$ cd my-app && git init && npm install
$ npm start
```

## Why this template over create-react-app ?

This template provide :

- ESLint AirBnB/Prettier configuration
- Prettier configuration
- Pre-commit prettifying
- Pre-commit linting check
- Pull request linting check (thanks to Github Action)
