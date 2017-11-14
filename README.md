
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
3.由于使用webpack的缘故目前只支持到IE9，后续会有fix，我在考虑是否替换成webpack1去适配这个怀旧框架。<br><br><br>
注：src->components下，error为404页面，nav为导航条，index为首页页面。<br>
注：开发状态只支持IE11，打包后的代码可以支持到IE9。
