import CreateErnegyBillService from '@modules/ernegyBill/services/CreateErnegyBillService';
import ListErnegyBillService from '@modules/ernegyBill/services/ListErnegyBillService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ErnegyBillController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listErnegyBill = container.resolve(ListErnegyBillService);

    const ernegybills = await listErnegyBill.execute();

    return response.json(ernegybills);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createErnegyBill = container.resolve(CreateErnegyBillService);

    const ernegybill = await createErnegyBill.execute({
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

    return response.json(ernegybill);
  }
}
