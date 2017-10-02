var express = require('express');
var app = express();

var nodeadmin = require('./middleware/index');
app.use(nodeadmin(app));
app.listen(3000, ()=> {
  console.log('server startup: http://localhost:3000/nodeadmin');
});
