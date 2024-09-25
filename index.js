// Import the express web application framework
import express from 'express';

// Create a new web application by calling the express function
const app = express();
const port = process.env.PORT || 3000; // Use environment variable PORT or default to 3000

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));

// Check if this module is the main module being run
if (require.main === module) {
  // Only start the server if this file is executed directly
  const server = app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
  });
}

// Export the app for testing
export default app;
