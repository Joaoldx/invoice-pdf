import { inject, injectable } from 'tsyringe';
import { IErnegyBillRepository } from '../domain/repositories/IErnegyBillRepository';
import { IShowErnegyBill } from '../domain/models/IShowErnegyBill';
import { ICreateErnegyBill } from '../domain/models/ICreateErnegyBill';
import AppError from '@shared/errors/AppError';

@injectable()
class ShowErnegyBillService {
  constructor(
    @inject('ErnegyBillRepository')
    private ernegyBillRepository: IErnegyBillRepository,
  ) {}

  public async execute({ id }: IShowErnegyBill): Promise<ICreateErnegyBill> {
    const ernegyBill = await this.ernegyBillRepository.findById(id);

    if (!ernegyBill) {
      throw new AppError('Conta de luz não encontrada', 404);
    }

    return ernegyBill;
  }
}

export default ShowErnegyBillService;
