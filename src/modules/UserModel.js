import mongoose from "./db";
const Schema = mongoose.Schema;

//Model 

    const usuarioModel = Schema({
        id:{
            type: Number,
            required:true
        },
        nome:{
            type:String,
            required:true
        },
        apelido:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        senha:{
            type:String, 
            required:true
        }
    });

const UserModel = mongoose.model("usuario", usuarioModel);
export default UserModel;