/*
 * @Author: palmerye 
 * @Date: 2017-12-26 21:29:17 
 * @Last Modified by: palmerye
 * @Last Modified time: 2017-12-26 22:05:28
 */

var fs = require('fs')
var zlib = require('zlib')

console.log('开始压缩 >>>>>>')
fs.rename(
    './example/dir_1/dir_1.js',
    './example/dir_2/dir_1.js',
    (err) => {
        if (err) {
            throw err
        }
        console.log('done...')
    }
)
fs.rename(
    './example/dir_1/',
    './example/dir_2/dir_1/',
    (err) => {
        if (err) {
            throw err
        }
        console.log('done...')
        console.log('压缩成功 >>>>>>')
    }
)
zlib.createGzip()
fs.createWriteStream('./example/dir_2.gz')
