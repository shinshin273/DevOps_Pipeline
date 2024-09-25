{
  "name": "web-server",
  "version": "1.0.0",
  "description": "Starter express web server template",
  "main": "index.js",
  "type": "module",  // Add this line
  "scripts": {
    "start": "node index.js",
    "test": "mocha test/**/*.test.js"  // Ensure your test files use .js
  },
  "keywords": [
    "node",
    "web",
    "server",
    "template",
    "sit774"
  ],
  "author": "SIT774",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.3"
  },
  "devDependencies": {
    "chai": "^5.1.1",
    "mocha": "^10.7.3",
    "supertest": "^7.0.0"
  }
}
