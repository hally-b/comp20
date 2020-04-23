var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://freetheemus:marsy123@cluster0-oijxy.mongodb.net/test?retryWrites=true&w=majority";
const fs = require('fs');
var datarr;
var comparr = [];
var tickarr = [];

fs.readFile('companies.csv', 'utf8', function (err, data) {
  var dataArray = data.split(/\r?\n/);
  var j = 0;
  datarr = dataArray.slice(1);
  for(var i = 0; i < datarr.length - 1; i++) {
    var temparr = datarr[i].split(",")
    comparr[j] = temparr[0];
    tickarr[j] = temparr[1];
    j++;
  }
  console.log(datarr);
});

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testdb");
  var collection = dbo.collection('companies');
  var newdat;
  for (var i = 0; i < comparr.length; i++) {
    newdat = {"Company" : comparr[i], "Ticker" : tickarr[i]};
    dbo.collection("companies").insertOne(newdat, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  }
  //db.close();
});
