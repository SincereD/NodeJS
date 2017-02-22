/*分方法导出*/

function one(){

    console.log('moduleTwo function one');
}

function two(){
    
    console.log('moduleTwo function two');
}

module.exports.one = one;
module.exports.two = two;