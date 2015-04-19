var config = require('../modules/config.js');

exports.disablewan = function(req, res){
  var sys = require('sys');
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) {
    sys.puts(stdout)
  }
  exec("casperjs casperjs/wan.js disable " + config.conf.router_username + " "
    + config.conf.router_password + " " + config.conf.router_ip, puts);
  res.end('OK');
};

exports.enablewan = function(req, res) {
  var sys = require('sys');
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) {
    sys.puts(stdout)
  }
  exec("casperjs casperjs/wan.js enable " + config.conf.router_username + " "
    + config.conf.router_password + " " + config.conf.router_ip, puts);
  res.end('OK');
};