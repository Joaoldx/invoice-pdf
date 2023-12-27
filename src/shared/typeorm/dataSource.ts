import { DataSource } from 'typeorm';

import ErnegyBill from '@modules/ernegyBill/typeorm/entities/ErnegyBill';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'lumis',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [ErnegyBill],
  subscribers: [],
  migrations: [],
});
