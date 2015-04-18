asus-router-web-scripts
==========================

Web scripts for the Asus RT-N66U Web Admin Interface.

##Intro

Here are a few simple casperjs scripts that logs into the web admin interface and simulates clicks.
These scripts are obviously very specific for ASUS RT-N66U, because the scripts will presume a very specific DOM
structure in the web pages. Feel free to fork and support other router models.

The scripts only turn access control on and off on a global level. Make sure that you have already set up blocking for individual mac-addresses using
a web browser.

The scripts can be run by themselves or through the simple enclosed nodejs webapp that calls the casperjs scripts.

##Prerequisites

Make sure that you have PhantomJS, CasperJS and NodeJS installed.

##Installation

Copy modules/config.template.js to modules/config.js and update the settings in there to match your passwords etc.

##Usage of CasperJS-scripts directly

```
cd casperjs
#
# Disable WAN access
casperjs disable.js username password routerip
#
# Enable WAN access
casperjs enable.js username password routerip
#
```

##Usage through the node webapp

Start the node webapp
```
node app.js
```

Enable access control
```
http://localhost:3022/disablewan
```

Disable access control
```
http://localhost:3022/enablewan
```


