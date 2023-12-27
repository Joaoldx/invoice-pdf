import 'reflect-metadata';
import { app } from './app';
import { dataSource } from '@shared/typeorm/dataSource';

dataSource
  .initialize()
  .then(async () => {
    console.log('Banco de dados iniciou');
    app.listen(3333, () => {
      console.log('Servidor inicializou');
    });
  })
  .catch(error => console.log('Falha ao iniciar o banco', error));
