import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ErnegyBillController from '../controllers/ErnegyBillController';

const ernegyBillRouter = Router();
const ernegyBillController = new ErnegyBillController();

ernegyBillRouter.get('/', ernegyBillController.index);

ernegyBillRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      clientNumber: Joi.string().required(),
      readingDate: Joi.date().required(),
      readingBill: Joi.number().required(),
      eletricConsumed: Joi.number().required(),
      eletricBill: Joi.number().required(),
      sceeConsumed: Joi.number().required(),
      sceeBill: Joi.number().required(),
      compensedErnegy: Joi.number().required(),
      compensedBill: Joi.number().required(),
      publicLightingContribution: Joi.number().required(),
    },
  }),
  ernegyBillController.create,
);
ernegyBillRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  ernegyBillController.show,
);

export default ernegyBillRouter;
