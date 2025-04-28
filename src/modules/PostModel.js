import mongoose from "./db.js";

const Schema  = mongoose.Schema; 

// Model 

    const postagemModel = Schema({
        postId: {
            type:Number
        },
        titulo:{
            type: String, 
            required:true
        },
        conteudo:{
            type:String,
            required:true
        },
        favorito:{
            type:Boolean
        }

    });

const PostModel = mongoose.model("postagemModel",postagemModel);

export default PostModel;