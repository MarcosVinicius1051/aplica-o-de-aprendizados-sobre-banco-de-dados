import express from "express";
// import router from "./src/routes/mainRoute.js";
import router from "./src/routes/postRoute.js";

const app = express();
const port = 8080;

//Config

  //body parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())

  //ejs 
    app.set("view engine", "ejs");

  //public 
  app.use(express.static("./src/public"))

  //routes
  app.use("/mainRoute",router);

  router.get("/",(req,res)=>{
    res.send("ola");
  });

app.listen(port, ()=>{
  console.log("servidor ligado")
});








