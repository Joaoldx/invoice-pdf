import CreateErnegyBillService from '@modules/ernegyBill/services/CreateErnegyBillService';
import ListErnegyBillService from '@modules/ernegyBill/services/ListErnegyBillService';
import ShowErnegyBillService from '@modules/ernegyBill/services/ShowErnegyBillService';
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
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showErnegyBill = container.resolve(ShowErnegyBillService);

    const ernegyBill = await showErnegyBill.execute({ id });

    return response.json(ernegyBill);
  }
}
