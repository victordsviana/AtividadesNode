const express = require('express');

//Rotas (qdo o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/posts/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send("Slug do post: " + slug)}); //Primeira rota //Funçaõ anonima //dois parametros

router.get('/rota1', (req, res) => {res.send("Olá rota1...")});

router.get('/rota2', (req, res) => {
    res.json(req.query);
});

module.exports = router;