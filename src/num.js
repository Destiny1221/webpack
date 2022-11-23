import temp from './temp/temp.js'

var str = "执行num.js中的同步代码"
console.log(str)
export function print() {
  temp.tmpPrint()
  console.log('我是 num.js 的 print 方法')
}
