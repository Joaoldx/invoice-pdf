import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import '@shared/typeorm';
import ReaderPdf from '@modules/pdf/ReaderPdf';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  return response.send('Primeira rota');
});

ReaderPdf();

export { app };
