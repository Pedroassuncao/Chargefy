import express from 'express';

const app = express();

app.use(express.json());


app.get('/users', (request, response) => {


});

app.listen(3333);