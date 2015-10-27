var app = require('app');
var MusicPlayer = require('musicplayer-api').MusicPlayer;
var dialog = require('dialog');


app.on('ready', function(){

  app.on('closed', function() {
    win = null;
  });

  player = new MusicPlayer();

  var tracks = dialog.showOpenDialog(win, {properties: ['openFile', 'multiSelections']})

  for (var i = 0; i < tracks.length; i++) {
    player.addTrack(tracks[i]);
  }

});
