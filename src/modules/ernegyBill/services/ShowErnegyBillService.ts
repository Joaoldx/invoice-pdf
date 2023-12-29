import { inject, injectable } from 'tsyringe';
import { IErnegyBillRepository } from '../domain/repositories/IErnegyBillRepository';
import { IShowErnegyBill } from '../domain/models/IShowErnegyBill';

@injectable()
class ShowErnegyBillService {
  constructor(
    @inject('ErnegyBillRepository')
    private ernegyBillRepository: IErnegyBillRepository,
  ) {}

  public async execute({ id }: IShowErnegyBill) {
    const ernegyBill = await this.ernegyBillRepository.findById(id);

    if (!ernegyBill) {
      return console.log('Conta de luz não encontrada');
    }

    return ernegyBill;
  }
}

export default ShowErnegyBillService;
