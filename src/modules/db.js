import mongoose from "mongoose";

// Configuração do moongose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bancoPostagem").then(()=>{
    console.log("Mongodb conectado com a database bancoPostagem")
}).catch((err)=>{
    console.log("erro ao tentar se concetar ao mongodb: "+err)
});

export default mongoose