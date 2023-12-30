import 'reflect-metadata';
import { app } from './app';
import { dataSource } from '@shared/infra/typeorm/dataSource';
import ReaderPdf from '@modules/pdf/services/ReaderPdfService';

dataSource
  .initialize()
  .then(async () => {
    console.log('Banco de dados iniciou');
    app.listen(3333, () => {
      ReaderPdf();
      console.log('Servidor inicializou');
    });
  })
  .catch(error => console.log('Falha ao iniciar o banco', error));
