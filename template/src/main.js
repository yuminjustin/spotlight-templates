require("babel-polyfill");
require("es5-shim-sham");
require('@/assets/css/reset.css');
require('@/assets/css/page.css');
var Router = require('./common/router')
var container = $("#app");

new Router(container);
B.history.start();

/* webpack 热替换 */
if (module.hot) {
    module.hot.accept();
}
