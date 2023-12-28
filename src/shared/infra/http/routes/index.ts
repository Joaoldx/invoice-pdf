import { Router } from 'express';
import ernegyBillRouter from '@modules/ernegyBill/infra/http/routes/ergenyBill.routes';

const routes = Router();

routes.use('/ernegybill', ernegyBillRouter);

export default routes;
