var path = require('path')

module.exports = {
  entry: { // 入口
    app: ['./src/main.js']
  },
  build: { // 生产环境
    env: '"production"',
    static: path.resolve(__dirname, '../static'), //资源目录
    newStatic: 'static',
    outputPath: '../../dist', // 输出目录
    gulpPath: 'dist', // gulp 同 输出目录
    htmlOption: { // 对应 entry
      app: {
        title: 'backbone webpack',
        template: 'index.html', // 源模板文件
        filename: 'index.html' // 输出文件
      }
    },
    bundleAnalyzerReport: false // 打包报告
  },
  dev: { // 开发环境
    env: '"development"',
    contentBase: path.resolve(__dirname, "/"), // 需要被访问的根目录
    publicPath: "/",
    outputPath: path.resolve(__dirname, '../../dist'),
    port: '8080',
    html5Router: false, // html5 router 
    htmlOption: { // 对应 entry
      app: {
        title: 'backbone webpack',
        template: 'index.html', // 源模板文件
        filename: 'index.html' // 输出文件
      }
    },
    proxy: {

    },
    serverHandler: false
    //function(app){
    //   Express app 可以用来做mock
    //   app.get('/some/path', function(req, res) {
    //     res.json({ custom: 'response' });
    //   });
    //}
  }
}
