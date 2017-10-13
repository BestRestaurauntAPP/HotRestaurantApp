var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//data 
var table = [{
	customerName:"bob",
	phoneNumber:5555555555,
	customerEmail:"email@aol.com",
	customerId:1
}];

var waitList=[{
	customerName:"bill",
	phoneNumber:1234567890,
	customerEmail:"bill@gmail.com",
	customerId:3
}];
//page routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "indexHome.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "indexTables.html"));
});

app.get("/all", function(req, res) {
  res.json(table);
});
//post new customers
app.post("/api/new", function(req, res) {
  var newcustomer = req.body;
newcustomer.customerId = newcustomer.ID.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);
  table.push(newcustomer);
res.json(newcustomer);

});
//$("#add-reservation").click(function() {
  //table.push(newcustomer);
   //res.json(newcustomer);
  // var addtowaiting = $("<div>");
  // $("#waitinglistsection").append(newcustomer);


  

  
//});
//port check
app.listen(PORT, function() {
  console.log(`our app is running on port ${ PORT }`);
});

