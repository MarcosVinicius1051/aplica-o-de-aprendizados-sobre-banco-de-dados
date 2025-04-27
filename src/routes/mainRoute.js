import express from "express";
import PostModel from "../modules/PostModel.js";

const router = express.Router();
//Rotas - principais

    router.get("/login",(req,res)=>{
        res.render("login");
    });

    router.get("/createAccount",(req,res)=>{
        res.render("createAccount")
    });
    // Rotas - Login/Registro
        router.post("/logging",(req,res)=>{
            /* aqui vai ser o intermediario para logar na conta */
        });
        router.post("/registering",(req,res)=>{
            /* aqui vai ser o intermediario para criar a conta */
        })


export default router