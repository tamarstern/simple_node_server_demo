// Get the packages we need
var express = require('express');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
router.get('/', function (req, res) {
    res.json({ message: 'Hello from demo!' });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Demoe port ' + port);
