import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticted from '@modules/users/infra/http/middlewares/ensureAuthenticted';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAviabilityControlles from '../controllers/ProviderDayAviabilityControlles';
import ProviderMonthAviabilityControlles from '../controllers/ProviderMonthAviabilityControlles';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAviabilityControlles = new ProviderMonthAviabilityControlles();
const providerDayAviabilityControlles = new ProviderDayAviabilityControlles();

providersRouter.use(ensureAuthenticted);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:providerId/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      providerId: Joi.string().uuid().required(),
    },
  }),
  providerMonthAviabilityControlles.index,
);

providersRouter.get(
  '/:providerId/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      providerId: Joi.string().uuid().required(),
    },
  }),
  providerDayAviabilityControlles.index,
);

export default providersRouter;
