

var human = require('./human.js');

var petter = new human({
    name:'Petter',
    birthDay:new Date(),
    sex:false
});

petter.save(function(callBack){

    console.log(callBack);

});

human.find({},function(callback){
    console.log(callback);
})

