# jsx-interpolation-loader

Interpolate values dynamically into jsx code before the babel-loader.

[中文 README](README-zh_CN.md)

Please check the following examples to get the usage of this loader.
Notice, you have to install `serve` globally before run the examples.
```
npm install -g serve
```

## Examle 1

Put this loader to the end of the loaders of jsx files, so that the files will be handled firstly by it.

Run the command
```
npm run example:1
```

## Example 2

Use this loader as a pre-loader of the jsx files.

Run the command
```
npm run example:2
```

## Example 3

With react-router and the code spliting, we can use this loader to interpolate "**on-demand**" routes configuration dynamically into the code, and then the pages can be lazy loaded.
This loader comes just because of this requirement.

Run the command
```
npm run example:3
```
