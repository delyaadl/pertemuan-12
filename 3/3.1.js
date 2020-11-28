const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    {useNewUrlParser:true}
);
const db = mongoose.connection;

db.once("open",()=>{
    console.log("Succesfully connected to MongoDb using Mongoose");
});

const Member = require("../2/models/Member")

var member_to_insert=new Member({
    name:"Space The Final Frontier",
    email:"dsadsa@gmail.com",
    credit:1701000
});

member_to_insert.save((err,product)=>{
    if(err)console.log(err);
    console.log(JSON.stringify(product));
});