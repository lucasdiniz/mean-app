const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());
server.listen(port, function(){
  console.log(`Server is running on port ${port}...`);
});

server.use(function(req, res, next){
  res.send('Middleware ok!');
  next();
});
