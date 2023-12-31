import { dataSource } from '@shared/infra/typeorm/dataSource';
import ErnegyBill from '@modules/ernegyBill/infra/typeorm/entities/ErnegyBill';
import { sanitizeData } from '../helper/Sanitize';
import { IData } from '../models/IData';

export default async function StorePdfService(files: IData[]) {
  for (const data of files) {
    const file = sanitizeData(data);
    await dataSource.manager.transaction(async transactionalEntityManager => {
      const { readingDate, clientNumber } = file;

      const billExists = await transactionalEntityManager
        .createQueryBuilder()
        .select('ernegyBill')
        .from(ErnegyBill, 'ernegyBill')
        .where('ernegyBill.clientNumber = :clientNumber', {
          clientNumber,
        })
        .andWhere('ernegyBill.readingDate = :readingDate', {
          readingDate,
        })
        .getOne();

      if (billExists) {
        return;
      }

      const bills = transactionalEntityManager
        .getRepository(ErnegyBill)
        .create({
          clientNumber: file.clientNumber,
          readingDate: file.readingDate,
          readingBill: file.readingBill,
          eletricConsumed: file.eletricConsumed,
          eletricBill: file.eletricBill,
          sceeConsumed: file.sceeConsumed,
          sceeBill: file.sceeBill,
          compensedErnegy: file.compensedErnegy,
          compensedBill: file.compensedBill,
          publicLightingContribution: file.publicLightingContribution,
        });

      await transactionalEntityManager.getRepository(ErnegyBill).save(bills);
    });
  }
}
