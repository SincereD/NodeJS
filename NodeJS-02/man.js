
var person = require('./person');

function man(id, name, age) {

    person.apply(this, [id, name, age,person.breath]);

    this.sayFun = function () {

        console.log('子类方法: id:'+this.id + ' name:' + this.name + ' age:' + this.age+"\n");
    }
}

module.exports = man;