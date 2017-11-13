require('@/assets/css/reset.css');
require('@/assets/css/page.css');
var Router = require('./common/router')
var container = $("#app");
new Router(container);
B.history.start();