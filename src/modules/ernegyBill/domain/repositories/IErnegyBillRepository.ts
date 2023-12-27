import { IErnegyBill } from '../models/IErnegyBill';
import { ICreateErnegyBill } from '../models/ICreateErnegyBill';
import { IShowErnegyBill } from '../models/IShowErnegyBill';
import { IRemoveErnegyBill } from '../models/IRemoveErnegyBill';

export interface ICreateErnegyBillRepository {
  findAll(): Promise<IErnegyBill>;
  create(data: ICreateErnegyBill): Promise<IErnegyBill>;
  show(data: IShowErnegyBill): Promise<IErnegyBill>;
  remove(data: IRemoveErnegyBill): Promise<IErnegyBill>;
}
