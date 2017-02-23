
var person = require('./person');

function man(id, name, age) {

    person.apply(this, [id, name, age,person.breath]);

    this.sayFun = function () {

        console.log('subClassFunc: id:'+this.id + ' name:' + this.name + ' age:' + this.age);
    }
}

module.exports = man;