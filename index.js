// Require the express web application framework (https://expressjs.com)
const express = require('express');

// Create a new web application by calling the express function
const app = express();
const port = 3000;

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));

// Tell our application to listen to requests at port 3000 on the localhost
const server = app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
});

// Export the app for testing
module.exports = app;
