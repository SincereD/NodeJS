
var person = require('./person.js');
var man = require('./man.js');

var crypto = require('crypto');  //加载crypto库
console.log(crypto.getHashes());

var content = 'password';//加密的明文；
var md5 = crypto.createHash('sha224');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
md5.update(content,'utf8');
var d = md5.digest('hex');
console.log(d);

aPerson = new person(1, 'Hei', 30);
aPerson.breath();

aMan = new man(1, 'Helln', 20);
aMan.sayFun();
aMan.breath();