var casper = require('casper').create();
var utils = require('utils');
var enabled = false;

casper.start();

var command = casper.cli.get(0)

casper.setHttpAuth(casper.cli.get(1), casper.cli.get(2));

casper.thenOpen('http://192.168.0.1/Advanced_WAN_Content.asp', function() {
  this.echo(this.getTitle());
});

casper.then(function() {
    this.echo('Will ' + command + ' wan');
    if (command == 'disable') {
      this.click('input[name="wan_enable"][value="0"]');
    } else {
      this.click('input[name="wan_enable"][value="1"]');
    }
});

casper.then(function() {
    this.echo('Will apply');
    this.click('input.button_gen');
});

casper.then(function() {
    this.echo('Done');
});

casper.run();