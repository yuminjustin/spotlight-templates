
## spotlight-templates-backbone
spotlight脚手架模板<br>

## 使用：

     spotlight init backbone my-project

     cd my-project

     npm install

     npm run dev

此模板是webpack下的 backbone+router环境<br><br>

1.配置文件在build/config.js 当中；<br>
2.src->common 是对backbone的扩充和router配置，router支持chunk打包；<br>
3.没有babel环境，为了兼容性，请使用es5，做开发。<br>
注：src->components下，error为404页面，nav为导航条，index为首页页面。