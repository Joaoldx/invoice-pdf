import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import '@shared/container';
import routes from './routes';
import ReaderPdf from '@modules/pdf/ReaderPdf';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

ReaderPdf();

export { app };
