import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
// Metodos
// get;  buscar ou listarr informação
//post; criar uma nv informaçno backend
//put; att informçao
//delete; delete informação

//Corpo (Request Body): Dados para criação ouatt de um registro
// route parems: identificar qual recurso quero att ou del
//query parems: paginação, filtros, ordenação

//localhost:3333/users
