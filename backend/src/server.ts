import express from 'express';
import path from 'path';
import './database/connection'; //checkar este import
import routes from './routes'; // checkar este import


const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));



app.listen(3333);