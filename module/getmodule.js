//getmodule.js
/*var myModule = require("./module");

myModule.setName('BYVoid');
myModule.sayHello();
*/

//loadmodule.js
var hello1 = require('./module');
hello1.setName('BYVoid1');

var hello2 = require('./module');
hello2.setName('BYVoid2');

hello1.sayHello();
