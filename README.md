
## spotlight-templates-backbone
spotlight脚手架模板<br>

## 使用：

     spotlight init backbone my-project

     cd my-project

     npm install

     npm run dev

     npm run build

此模板是webpack下的 backbone+router环境<br><br>

1.配置文件在build/config.js 当中；<br>
2.src->common 是对backbone的扩充和router配置，router支持chunk打包；<br>
3.由于使用webpack的缘故只支持到IE9，所以增加了shim和polyfill，各种坑。<br>
4.引入gulp对webpack打包后的js做关键字替换让它能支持更低版本IE，经过测试已支持IE7。<br>
（gulp会在执行build之后自动执行，无需手动操作，为保证兼容性请尽量使用es5做开发，为应对奇葩需求不得不填各种坑来适应这个怀旧框架）
<br>
# :(
<br><br><br>
注：src->components下，error为404页面，nav为导航条，index为首页页面。<br>
注：开发状态只支持IE11，打包后的代码可以支持到IE7。
