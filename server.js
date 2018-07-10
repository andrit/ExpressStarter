var express = require('express');
// # create main app interface
var app = express();

// # assign port 8080
var port = process.env.PORT || 8080;
app.listen(port, function() {
        // # some test output in your console
    console.log("Listening on " + port);
});

// # handle a GET request for index.html
app.get("/", function(req, res) {
    res.sendfile('index.html')
});

// # handle a POST request to endpoint /inventory/product/
app.post("/inventory/product", function(req, res) { 
    
    // # create a sample JSON output.
    res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ product_id: 123, model_number: 'PCRXYZ' }));
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 

console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});
