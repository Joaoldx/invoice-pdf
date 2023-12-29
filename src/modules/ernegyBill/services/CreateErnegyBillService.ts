import { inject, injectable } from 'tsyringe';
import { IErnegyBillRepository } from '../domain/repositories/IErnegyBillRepository';
import { ICreateErnegyBill } from '../domain/models/ICreateErnegyBill';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateErnegyBillService {
  constructor(
    @inject('ErnegyBillRepository')
    private ernegyBillRepository: IErnegyBillRepository,
  ) {}

  public async execute({
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
  }: ICreateErnegyBill): Promise<ICreateErnegyBill> {
    const ernegyBillExists =
      await this.ernegyBillRepository.findByClientNumberAndDate({
        clientNumber,
        readingDate,
      });

    if (ernegyBillExists) {
      throw new AppError('Conta de luz já existe');
    }

    const ernegyBill = await this.ernegyBillRepository.create({
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

    return ernegyBill;
  }
}

export default CreateErnegyBillService;
