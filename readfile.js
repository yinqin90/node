//read file 异步，使用回调函数
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', readFileCallBack);
//readfilecallback.js
function readFileCallBack(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
console.log('end.');
