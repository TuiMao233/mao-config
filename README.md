# Hairylib Monorepo

<div align=center> <img src="packages/docs__public/logo.png" > </div>

[hairylib](https://hairylib.com/) 是工具代码库，使用 `pnpm` / `turbo` / `changeset` 管理的多个模块包(monorepo)的项目。

Monorepo 的好处是什么？

- **统一管理**。比如微前端项目，多个子应用可以放在同一个`monorepo`中方便管理；后端用`node.js`的项目放在`monorepo`中也可以使用同一套技术栈管理。在`CI/CD`等流水线过程中，方便统一迭代或升级版本，也方便做通用化的配置，适用到多个子项目当中。
- **依赖提升**。如果多个项目都依赖了诸如`react`、`vue`或`TypeScript`等常用库，那可以通过`lerna`或者`yarn workspace`、`pnpm workspace`将依赖提升到最外层，多个子模块/包复用同一个依赖，减小项目体积。

what is pnpm ?

- [pnpm: 关于现代包管理器的深度思考](https://juejin.cn/post/6932046455733485575)

what is turbo and changeset ?

- [turbo: Turborepo 的任务编排能力](https://zhuanlan.zhihu.com/p/468382756)


## 运行流程图

> TODO

## 文档系统

基于 vitepress，收集 packages 中的文档，自动组合，通过 github actions 自动化部署到 hairylib.com 域名。

地址：https://hairylib.com/


## 模块与依赖

![dependencies](meta/dependencies.svg)


## 有点意思的小技巧

在 .js 文件中引入 .ts 文件

~~~js
require('esbuild-register')
// 要注意的是，因为 ts 使用 esm 的原因，export default 则需要在获取一层
module.exports = require('./scripts/rollup.config.ts').default
~~~


## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
