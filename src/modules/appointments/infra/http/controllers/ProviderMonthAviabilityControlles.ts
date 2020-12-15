import { Request, Response } from 'express';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import { container } from 'tsyringe';

export default class ProviderMonthAviabilityControlles {
  public async index(request: Request, response: Response): Promise<Response> {
    const { providerId } = request.params;
    const { year, month } = request.query;

    const listProviderMonthAvailabilityService = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailabilityService.execute({
      providerId,
      year: Number(year),
      month: Number(month),
    });

    return response.json(availability);
  }
}
