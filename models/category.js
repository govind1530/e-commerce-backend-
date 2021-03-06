const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categorySchema=new Schema({
    name:{
        type:String,
        trim:true,
        require:true,
        maxlength:32,
        unique:true
    }
},
{
    timestamps:true
}
)

module.exports =mongoose.model("Category",categorySchema);
