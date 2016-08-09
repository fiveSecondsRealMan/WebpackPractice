# Webpack Scaffold
搭建一个webpack脚手架，方便以后快速使用webpack构建项目。

Summary
--
该脚手架设置了webpack常用的配置项，提高了实际开发效率和质量。

Feature
--

1、优化最终打包模块体积，减少首页请求资源体积过大造成响应时间过长；

* 提取css代码生成文件
* 支持异步加载模块

2、开发环境
* 热部署
* 分割成公共模块
* 断点调试
* 自动依赖静态资源目录的css和js生成html页面
* 图片处理

3、生成环境
* 压缩、合并、混淆模块
* 版本管理

Usage
--

开发环境下
> cnpm run dev

生产环境下
> cnpm run dist
