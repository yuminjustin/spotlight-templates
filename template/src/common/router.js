// 导航条
var Nav = require('C/nav')

var Router = B.Router.extend({
    routes: {
        '': 'index',
        ':model(/:action)(/*condition)': 'loadmodel'
    },
    error: function () {
        // 404 页面
        this.loadmodel('error', 'index');
        return false;
    },
    initialize: function (container) {
        this.container = container;
        this.addNav()
    },
    index: function () {
        this.loadmodel('index', 'index');
        location.hash = "#/"
    },
    loadmodel: function (module, action, condition) {
        // router加载
        if (!action) action = "index";

        var _this = this,
            options = {
                "module": module,
                action: action,
                condition: condition,
                params: {}
            };

        var str = [module, action].join('/');

        /* 拆分hash */
        if (typeof condition == 'string' && /\:/g.test(condition), condition = _S.trim(condition)) {
            var arr = condition.split('/');
            var result = {};
            _.each(arr, function (i) {
                var temp = i.split(':');
                result[_S.trim(temp[0])] = _S.trim(temp[1]);
            });
            options.params = result;
        } else {
            options.params = condition || {};
        }

        /* webpack按需加载  */

        if (str == 'index/index') {
            require.ensure([], function (require) {
                _this.showPage(require('C/index/index'), [module, action], options);
            });
        } else {
            require.ensure([], function (require) {
                _this.showPage(require('C/error/index'), [module, action]);
            });
        }
    },
    addNav: function () { /* 添加导航 */
        var el = $('<div/>').attr({
            'id': 'app-nav'
        })
        this.container.append(el)
        Nav({ $el: el })
    },
    showPage: function (view, arr, options) { /* 显示view */
        this.view && this.destroyView()
        var id = arr.join('-'),
            el = $('<div/>').attr({
                'id': id
            })
        this.container.append(el)
        this.view = view($.extend({
            $el: el
        }, options))
    },
    destroyView: function () { /* 销毁view */
        var view = this.view;
        if (_.isFunction(view.close)) {
            //扩展自Base.View的view
            view.close();
        } else {
            //普通Backbone view
            view.remove();
        }
    }

});

module.exports = Router
