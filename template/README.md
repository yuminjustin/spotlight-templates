
## spotlight-templates-backbone
spotlight scaffold template for backbone<br>

## Use：

     spotlight init backbone my-project

     cd my-project

     npm install

     npm run dev

     npm run build

此模板是webpack、backbone+router环境<br>
This template is base on webpack, support for backbone+router development <br>

1.配置在build/config.js 当中；<br>
  Configures in build/config.js <br><br>
2.src/common中的文件是对backbone的扩充和router配置，router支持chunk打包；<br>
  Files in src/common are extend for backbone and router, support chunk package by webpack<br><br>
3.由于使用webpack的缘故只支持到IE9，所以增加了shim和polyfill，遇到各种坑。<br>
  Due to the use of webpack only supports IE9, so import shim and polyfill, many bugs.<br><br>
4.引入gulp对webpack打包后的js做关键字替换让它能支持更低版本IE，经过测试已支持IE7。<br>
（gulp会在执行build之后自动执行，无需手动操作，为保证兼容性请尽量使用es5做开发，为应对奇葩需求不得不填各种坑来适应这个怀旧框架）<br>
  Use gulp to replace javascript keywords in the files packs by webpack, so we can run it on IE7!<br>
（gulp will execute automatically after executing build, no manual operation required, To ensure compatibility please try to use es5 to develop, resolve the freak needs have to find a lots of solutions for this nostalgic framework ——"Backbone"）<br><br>
5.webpack的热替换好像并不能生效，只会刷新页面。<br>
Webpack hot reload can't work well，just refresh when you edit your files。<br>
<br>

# :(

<br><br><br>
注：src/components下，error为404页面，nav为导航条。<br>
注：开发状态只支持IE11，打包后的代码可以支持到IE7。<br>
<br>
notice: Directory src/components, error is 404 page , nav is navigation.<br>
notice:When you developing the codes just can run on IE7, then you execute build they can works on IE7.
