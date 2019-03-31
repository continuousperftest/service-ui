# UI service for Continuous Perf Test

## Prerequisite

1. Install nodejs

## Configuration
- development environment - `config/dev.env.js`
- production environment - `config/prod.env.js`
```javascript
module.exports = {
    ROOT_API: ''  //http://you_backend_server:port
};
```

## Build Setup

```bash
# install dependencies
npm install

# build for development wtih hot reload at http://localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Demo

The demo application is hosted using the following [host](http://52.202.21.1)
