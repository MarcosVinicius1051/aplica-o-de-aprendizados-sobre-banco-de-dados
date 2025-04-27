import express from "express";
import PostModel from "../modules/PostModel.js";

const router = express.Router();

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/createAccount",(req,res)=>{
    res.render("createAccount")
})

export default router