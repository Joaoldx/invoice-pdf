import { IErnegyBill } from '../models/IErnegyBill';
import { ICreateErnegyBill } from '../models/ICreateErnegyBill';
import { IListErnegyBill } from '../models/IListErnegyBill';

type SearchParams = {
  clientNumber: string;
  readingDate: Date;
};

export interface IErnegyBillRepository {
  findAll(): Promise<IListErnegyBill>;
  findById(id: string): Promise<IErnegyBill | null>;
  create(data: ICreateErnegyBill): Promise<IErnegyBill>;
  remove(data: IErnegyBill): Promise<void>;
  findByClientNumberAndDate({
    clientNumber,
    readingDate,
  }: SearchParams): Promise<IErnegyBill | null>;
}
