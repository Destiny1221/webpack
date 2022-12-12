/**
 * 1、利用babel完成代码转换，生成单个文件依赖
 * 2、生成依赖图谱
 * 3、生成最后的打包文件
 * babel：
 * @babel/parser：生成AST抽象语法书
 * @babel/traverse：AST遍历，记录依赖关系
 * @babel/core和@babel/preset-env：代码转换
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

function step_one(filePath) {
    // 读取文件
    const content = fs.readFileSync(filePath, 'utf8')
    const ast = parser.parse(content, {
        sourceType: 'module' //babel官方规定必须加这个参数，不然无法识别ES Module
    })
    traverse(ast,{
        
    })
    console.log(ast)
}
step_one(path.resolve(process.cwd(), './src/module/index.js'))