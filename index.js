const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Java e Python em 10 dias', 'Como passar em concursos de TI', 'Como é minha rotina como desenvolvedor']

//retorna um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})

//retorna todos os cursos

server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

//criar novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name)

    return res.json(cursos);
})

//deletar um curso
server.delete('/cursos/:index', (req, res) => {
     const { index } = req.params;

     cursos.splice(index, 1)
     return res.json({message: "O curso foi deletado"})
})

server.listen(3000)