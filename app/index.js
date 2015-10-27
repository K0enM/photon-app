var app = require('app');
var window = require('browser-window');

app.on('ready', function(){
  var win = new window({width: 800, height: 600});
  win.loadUrl("file://" + __dirname + "/index.html");
});
