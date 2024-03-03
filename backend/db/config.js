const mongoose =require('mongoose');

const mongoConn=async ()=>{
    try{
        const url=process.env.MONGO_DB_URL
    let res = await mongoose.connect(url);
    console.log("MongoDb is Connected..")

    }catch(err){
        console.log(err.message,"err db")
        process.exit(1)
    }
}
module.exports = mongoConn;