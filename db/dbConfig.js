import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

let db = mongoose.connection;

db.on("error", console.log.bind(console, `Erro de conexão`));
db.once("open", () => {
  console.log("Connect dataBase: sucessfully");
});
