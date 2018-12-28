const express = require('express');
const app = express();



app.get('/', function(req, res) {
    res.send("Hello world!")
})

app.get('/dogs', function(req, res) {
    res.send("This is the dog page!")
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});