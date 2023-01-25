//Fazendo importação
const express = require ("express");

//Rotas (qdo o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/', (req, res) => {res.send("Eu consegui...")}); //Primeira rota //Funçaõ anonima //dois parametros

//Configs basicas do app
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1
module.exports = app; //exportamos o app, pois vamos importá-lo no servidor