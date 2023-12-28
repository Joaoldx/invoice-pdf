import { container } from 'tsyringe';

import { IErnegyBillRepository } from '@modules/ernegyBill/domain/repositories/IErnegyBillRepository';
import { ErnegyBillRepository } from '@modules/ernegyBill/infra/typeorm/repositories/ErnegyBillRepository';

container.registerSingleton<IErnegyBillRepository>(
  'ErnegyBillRepository',
  ErnegyBillRepository,
);
