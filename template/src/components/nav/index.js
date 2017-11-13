var tpl = require('html-loader!./tpl/index.html');
var Base = require('@/common/base');

var View = Base.View.extend({
    template: _.template(tpl),
    initialize: function () {
        this.render();
    },
    afterRender: function() {
    }
})

module.exports = function (options) {
    options = options || {};
    return new View(options);
}