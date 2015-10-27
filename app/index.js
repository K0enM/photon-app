var app = require('app');
var window = require('browser-window');

app.on('ready', function(){
  var win = new window({width: 800, height: 600, icon: "images/play.png"});
  win.loadUrl("file://" + __dirname + "/index.html");

  app.on('closed', function() {
    win = null;
  });
});


app.on('window-all-closed', function(){
  if (process.platform != "darwin") {
    app.quit();
  }
});
