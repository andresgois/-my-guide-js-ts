import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { resolve } from 'path';

dotenv.config();
import './database';
import express from 'express';
import homeRoute from './routes/homeRoutes';
import userRoute from './routes/userRoutes';
import TokenRoute from './routes/TokenRoutes';
import alunoRoute from './routes/alunoRoutes';
import fotosRoute from './routes/fotosRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', TokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/fotos/', fotosRoute);
  }
}

export default new App().app;
