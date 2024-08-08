const mongoose=require("mongoose")

const database=process.env.DATABASE

mongoose.connect(database)
.then(()=>console.log(`Database is connected !!!`))
.catch(()=>console.log(`database is not connected`))