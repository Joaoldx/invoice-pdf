import { Repository } from 'typeorm';
import ErnegyBill from '../entities/ErnegyBill';
import { IErnegyBillRepository } from '@modules/ernegyBill/domain/repositories/IErnegyBillRepository';
import { IErnegyBill } from '@modules/ernegyBill/domain/models/IErnegyBill';
import { ICreateErnegyBill } from '@modules/ernegyBill/domain/models/ICreateErnegyBill';
import { dataSource } from '@shared/infra/typeorm/dataSource';
import { IListErnegyBill } from '@modules/ernegyBill/domain/models/IListErnegyBill';

export class ErnegyBillRepository implements IErnegyBillRepository {
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
    publicLightingContribution,
  }: ICreateErnegyBill): Promise<ErnegyBill> {
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
      publicLightingContribution,
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
      .createQueryBuilder()
      .select('ernegyBill')
      .from(ErnegyBill, 'ernegyBill')
      .where('ernegyBill.clientNumber = :clientNumber', { clientNumber })
      .andWhere('ernegyBill.readingDate = :readingDate', { readingDate })
      .getOne();

    return ernegyBill;
  }
}
