const Mongodb=require("mongodb").MongoClient,
    dbUrl="mongodb://127.0.0.1:27017",
    dbName="db-untar-cafe";

Mongodb.connect(dbUrl,(error,client)=>{
    if(error) throw error;
    let db = client.db(dbName);
    db.collection("untar-cafe")
        .find()
        .toArray((error,data)=>{
            if(error) throw error;
            console.log(data);
        })
})
