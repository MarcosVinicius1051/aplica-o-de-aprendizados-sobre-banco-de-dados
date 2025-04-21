import express from "express";
import path from "path";

export let app = express();
let __dirname = path.resolve(); 



const port = 4042;
app.listen(port, () => {
    console.log("servidor está aberto");
  });