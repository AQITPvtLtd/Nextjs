import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        const{connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "workmanager",
        });
        console.log("db connected...");
        //console.log(connection);

        // testind and creating new user

        // const user=new User({
        //     name:"test name",
        //     email:"test@gamil.com",
        //     password:"test password",
        //     about:"this is testing",
        // });

        // await user.save();
        
        console.log("user is created");


        console.log("connection with host ", connection.host);
    }catch(error){
        console.log("failed to connect with database");
        console.log(error);
    }
};