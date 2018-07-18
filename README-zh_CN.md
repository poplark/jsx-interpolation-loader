# jsx-interpolation-loader

此 loader 用于 jsx 代码的预处理，动态地将需要插入的值插入到 jsx 代码中，然后交由 babel-loader 处理。

[README in English](README.md)

请参考以下示例，查看此 loader 的用法，注意，运行示例命令时，需要全局安装 serve，即
```
npm install -g serve
```

## 示例1

将此 loader 置于 jsx 文件的 loaders 的末尾，使其作为处理队列中的首个 loader 对 jsx 文件进行处理。

运行命令
```
npm run example:1
```

## 示例2

将此 loader 作为 jsx 文件的 pre-loader ，使其对 jsx 文件进行预处理。

运行命令
```
npm run example:2
```

## 示例3

基于 react-router 及 code spliting 技术，将 **按需的** 路由配置动态插入到代码中，实现页面的懒加载。正是此需求，触发了此 loader 的出现。

运行命令
```
npm run example:3
```
