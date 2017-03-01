
function person(id,name,age){

    this.id = id;
    this.name = name;
    this.age = age;

    this.breath = function(){

        console.log('父类方法: person must breath'+"\n");
    }
}
 

module.exports = person;