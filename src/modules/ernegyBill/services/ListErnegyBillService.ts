import { inject, injectable } from 'tsyringe';
import { IErnegyBillRepository } from '../domain/repositories/IErnegyBillRepository';
import { IListErnegyBill } from '../domain/models/IListErnegyBill';

@injectable()
class ListErnegyBillService {
  constructor(
    @inject('ErnegyBillRepository')
    private ernegyBillRepository: IErnegyBillRepository,
  ) {}

  public async execute(): Promise<IListErnegyBill> {
    return await this.ernegyBillRepository.findAll();
  }
}

export default ListErnegyBillService;
