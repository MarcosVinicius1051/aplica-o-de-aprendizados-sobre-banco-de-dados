import express from "express";
import PostModel from "../modules/PostModel.js";
import router from "./mainRoute.js";

//  Rotas - posts
router.get("/createPost",(req,res)=>{
   res.render("createPost")
});
//Criar o post
router.post("/sendNewPost",(req,res)=>{
    PostModel.find().lean().then((postagem)=>{
        const novaPostagem = {
            postId:postagem.length,
            titulo: req.body.titulo,
            conteudo:req.body.texto,
            favorito: false
        }
        new PostModel(novaPostagem).save().then(()=>{
            console.log("novo post criado");
            res.redirect("/mainRoute/home");
        }).catch((err)=>{
            console.log("algo deu errado ao salvar um novo post no bd: " + err)
        })
    })
});
router.get("/home",(req,res)=>{
    PostModel.find().lean().then((postagem)=>{
        res.render("home", {novoPost : postagem})
    }).catch((err)=>{
        console.log("algo deu eo carregar os posts: "+err);
    })
})

//Deletar Post

router.post("/deletarPost",(req,res)=>{
    PostModel.deleteOne({postId: req.body.postId}).then(()=>{
        console.log("post deletado com sucesso");
        res.redirect("/mainRoute/home")
    }).catch((err)=>{
        console.log("erro ao tentar deletar o post: " + err)
    });
    
})
export default router