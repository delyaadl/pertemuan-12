const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    {useNewUrlParser:true}
);
const db = mongoose.connection;

db.once("open",()=>{
    console.log("Succesfully connected to MongoDb using Mongoose");
});

const Member = require("./models/Member")

var member1 = new Member({
    name:"webprog",
    email:"untariandsadsa@stu.untar.ac.id"
});

member1.save((error,saveDocument)=>{
    if(error)console.log(error);
    console.log(saveDocument);
});

Member.create(
    {
        name:"UNTAR",
        email:"UBNTARINA@fgsasa.com",
        credit:1701000
    },
    function (error,saveDocument){
        if(error)console.log(error);
        console.log(saveDocument);
    }
);