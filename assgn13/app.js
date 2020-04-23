var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ("<html><head><style type='text/css'>.col {display: inline-block; width:40px; \
    border: 1px solid #333;} </style></head>");
    res.write("<body>Calendar for April 2020<br />");
    for (i=0; i<m.length; i++)
      res.write(m[i] + "<br />")
    res.end("</body></html>");
  }).listen(8080);
