import express from "express";
import path from "path";

export const app = express();
export const __dirname = path.resolve(); 
const port = 8080;

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})


app.listen(port, ()=>{
  console.log("servidor ligado")
})








