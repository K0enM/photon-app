var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');



function createMenu() {
  var menu = new Menu();
  menu.append(new MenuItem({label: "About & Licenses", click: function() {
    alert('About page opened');
  }}));

  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
  }, false);
}
