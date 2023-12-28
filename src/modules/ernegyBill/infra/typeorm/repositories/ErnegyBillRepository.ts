import { Repository } from 'typeorm';
import ErnegyBill from '../entities/ErnegyBill';
import { ICreateErnegyBillRepository } from '@modules/ernegyBill/domain/repositories/IErnegyBillRepository';
import { IErnegyBill } from '@modules/ernegyBill/domain/models/IErnegyBill';
import { ICreateErnegyBill } from '@modules/ernegyBill/domain/models/ICreateErnegyBill';
import { dataSource } from '@shared/infra/typeorm/dataSource';
import { IListErnegyBill } from '@modules/ernegyBill/domain/models/IListErnegyBill';

export class CreateErnegyBillRepository implements ICreateErnegyBillRepository {
  private ormRepository: Repository<ErnegyBill>;

  constructor() {
    this.ormRepository = dataSource.getRepository(ErnegyBill);
  }

  public async findAll(): Promise<IListErnegyBill> {
    const [ernegyBill, count] = await this.ormRepository
      .createQueryBuilder()
      .getManyAndCount();

    const result = {
      data: ernegyBill,
      total: count,
    };

    return result;
  }

  public async create({
    clientNumber,
    readingDate,
    readingBill,
    eletricConsumed,
    eletricBill,
    sceeConsumed,
    sceeBill,
    compensedErnegy,
    compensedBill,
    publicLightingContribuition,
  }: ICreateErnegyBill): Promise<IErnegyBill> {
    const ernegyBill = this.ormRepository.create({
      clientNumber,
      readingDate,
      readingBill,
      eletricConsumed,
      eletricBill,
      sceeConsumed,
      sceeBill,
      compensedErnegy,
      compensedBill,
      publicLightingContribuition,
    });

    await this.ormRepository.save(ernegyBill);

    return ernegyBill;
  }

  public async findById(id: string): Promise<ErnegyBill | null> {
    return await this.ormRepository.findOneBy({ id });
  }

  public async remove(ernegyBill: IErnegyBill): Promise<void> {
    await this.ormRepository.remove(ernegyBill);
  }

  public async findByClientNumberAndDate({
    clientNumber,
    readingDate,
  }: {
    clientNumber: string;
    readingDate: Date;
  }): Promise<IErnegyBill | null> {
    const ernegyBill = await this.ormRepository
      .createQueryBuilder('ernegy-bill')
      .where('ernegy-bill.clientNumber = :clientNumber', { clientNumber })
      .andWhere('ernegy-bill.readingDate = :readingDate', { readingDate })
      .getOne();

    return ernegyBill;
  }
}
