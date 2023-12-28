import { DataSource } from 'typeorm';
import ErnegyBill from '@modules/ernegyBill/infra/typeorm/entities/ErnegyBill';

import { CreateErnegyBill1703797612833 } from './migrations/1703797612833-CreateErnegyBill';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'pdfbill',
  synchronize: false,
  logging: true,
  entities: [ErnegyBill],
  subscribers: [],
  migrations: [CreateErnegyBill1703797612833],
});
