import express from 'express';

const app = express();

app.use(express.json());
// rota = conjunto
// recurso = user
// metodos http= GET, POST, PUT, DELETE
// parametros

// GET = Buscar uma info ( lista, item)
// POST = Criar info
// PUT = edit info
// DELETE = delete info

// Query Params: http://localhost:3333/users?search=pedro
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)

app.get('/users', (request, response) => {
    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);
    
});

app.listen(3333);