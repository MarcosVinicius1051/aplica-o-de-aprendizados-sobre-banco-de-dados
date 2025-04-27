import express from "express";
import PostModel from "../modules/PostModel.js";
import UserModel from "../modules/UserModel.js";

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
            res.send("login efetuado")
            /* aqui vai ser o intermediario para logar na conta */
        });
        router.post("/registering",(req,res)=>{
            res.send("registro efetuado")
            /* aqui vai ser o intermediario para criar a conta */
        })


export default router