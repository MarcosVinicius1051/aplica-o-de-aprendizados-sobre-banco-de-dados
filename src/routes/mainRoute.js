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
        UserModel.find().lean().then((usuarios)=>{
            const loginUsuario = {
                nome:req.body.nameUser,
                senha:req.body.passwordUser
            }
            return usuarios.map((usuarios)=>{
                if((usuarios.nome == loginUsuario.nome || usuarios.email == loginUsuario.nome)&& usuarios.senha == loginUsuario.senha ){
                    console.log("usuario logado!");
                    return res.redirect("/mainRoute/home")
                }else{
                    console.log("nome ou senha errados!")
                    return res.redirect("/mainRoute/login")
                }
            })
            
        }).catch((err)=>{
            console.log("algo deu errado ao fazer o login: "+err);
        })
        /* aqui vai ser o intermediario para logar na conta */
    });
    router.post("/registering",(req,res)=>{
        UserModel.find().lean().then((usuarios)=>{
            const novoUsuario = {
                Userid:usuarios.length,
                nome:req.body.userName,
                apelido:req.body.userNickname,
                email:req.body.userEmail,
                senha:req.body.userPassword
            } //resolver probela do apelido usado duas vezes 
            UserModel.findOne({ email: novoUsuario.email, apelido:novoUsuario.apelido }).lean().then((usuarioEncontrado,apelidoUsado)=>{
                if(usuarioEncontrado){
                    console.log("email já existe!");
                    return res.redirect("/mainRoute/login");
                }else if(apelidoUsado){
                    console.log("apelido já existe!");
                    return res.redirect("/mainRoute/login");
                }else{
                    if(req.body.userPassword == req.body.userPasswordConfirmation){
                        new UserModel(novoUsuario).save().then(()=>{
                            res.redirect("/mainRoute/home")
                        }).catch((err)=>{
                            console.log("algo deu errado no sistema para pagina principal:  "+err)
                        })
                    }else{
                        res.redirect("/createAccount").then(()=>{
                            console.log("senhas diferentes, tente dnv!");
                            res.redirect("/createAccount");
                        }).catch((err)=>{
                            console.log("algo deu errado ao tentar confirmar as senhas: "+ err)
                        })
                    }
                }
            }).catch((err)=>{
                console.log("houve algum erro ao validar o email: "+ err)
            })
        })
        
    })
//Rotas - conta/posts
    router.get("/home",(req,res)=>{
        res.render("home")
    })

export default router