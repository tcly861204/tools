# 什么是webpack? 他有什么优点？
### 首先对于很多刚接触webpack人来说，肯定会问webpack是什么？它有什么优点？我们为什么要使用它？带着这些问题，我们来总结下如下：
### Webpack是前端一个工具，可以让各个模块进行加载，预处理，再进行打包，它能有Grunt或Gulp所有基本功能。优点如下：

* 1.支持commonJS和AMD模块。
* 2.支持很多模块加载器的调用，可以使模块加载器灵活定制，比如babel-loader加载器，该加载器能使我们使用ES6的语法来编写代码。
* 3.可以通过配置打包成多个文件，有效的利用浏览器的缓存功能提升性能。
* 4.使用模块加载器，可以支持sass，less等处理器进行打包且支持静态资源样式及图片进行打包。
* 5.更多等等。。。带着这些问题我们慢慢来学习webpack。

# 二：如何安装和配置
首先我的项目目录结构是：文件名叫webpack，里面只有一个main.html，代码如下：

```javascript

<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="src/react.min.js"></script>
 </head>
 <body>
    <div id="content"></div>
    <script src="build/build.js"></script>
 </body>
</html>

```