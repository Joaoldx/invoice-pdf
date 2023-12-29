import { inject, injectable } from 'tsyringe';
import { IErnegyBillRepository } from '../domain/repositories/IErnegyBillRepository';
import { IRemoveErnegyBill } from '../domain/models/IRemoveErnegyBill';
import AppError from '@shared/errors/AppError';

@injectable()
class DeleteErnegyBillService {
  constructor(
    @inject('ErnegyBillRepository')
    private ernegyBillRepository: IErnegyBillRepository,
  ) {}

  public async execute({ id }: IRemoveErnegyBill): Promise<void> {
    const ernegyBill = await this.ernegyBillRepository.findById(id);

    if (!ernegyBill) {
      throw new AppError('Conta de luz não encontrada', 404);
    }

    await this.ernegyBillRepository.remove(ernegyBill);
  }
}

export default DeleteErnegyBillService;
