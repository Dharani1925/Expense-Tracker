import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://dharanip583223104019_db_user:AZ5u2qNDyQO3lO26@cluster0.fhrmifg.mongodb.net/Expense")
    .then(()=> console.log("DB CONNECTED"))
}