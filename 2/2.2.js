const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    {useNewUrlParser:true}
);
const db = mongoose.connection;

db.once("open",()=>{
    console.log("Succesfully connected to MongoDb using Mongoose");
});

const memberSchema = mongoose.Schema({
    name:String,
    email:String,
    credit:Number
});

const Member = mongoose.model("Member",memberSchema);

var member1 = new Member({
    name:"Delya",
    email:"untarian@stu.untar.ac.id"
});

member1.save((error,saveDocument)=>{
    if(error)console.log(error);
    console.log(saveDocument);
});

Member.create(
    {
        name:"Starship Enterprise",
        email:"to-boldy-go@fasdas.com",
        credit:1701000
    },
    function (error,saveDocument){
        if(error)console.log(error);
        console.log(saveDocument);
    }
);