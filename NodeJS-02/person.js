
function person(id,name,age){

    this.id = id;
    this.name = name;
    this.age = age;

    this.breath = function(){

        console.log('baseClassFunc: person must breath');
    }
}
 

module.exports = person;