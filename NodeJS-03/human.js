
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var humanSchema = new Schema({
    name:String,
    birthDay:Date,
    sex:Boolean
});

var human = mongodb.mongoose.model("Human",humanSchema);
module.exports = human;

