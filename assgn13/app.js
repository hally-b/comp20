var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ("<head><title> Companies Form </title></head>");
  res.write("<body><h1> Submit Company or Ticker </h1>");
  res.write("<h3> In this form, choose to either submit a company name or a ticker symbol \
  to see the related data. </h3> ");
  res.write("<form name = 'myform'>");
  res.write("<p>Company Name: <input type= 'text'  name='fname' placeholder='EX: Apple'/></p>");
  res.write("<p>Ticker Symbol:<input type='text' name='lname' placeholder='EX: APPL'/></p>");
  res.write("<input type = 'submit' value = 'Submit Choice'/>");
  res.end('</form></body></html>');
  }).listen(8080);
