import { Request, Response } from 'express';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsControlles {
  public async index(request: Request, response: Response): Promise<Response> {
    const providerId = request.user.id;
    const { year, month, day } = request.query;

    const listProviderAppointmentsService = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointmentsService.execute({
      providerId,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });

    return response.json(classToClass(appointments));
  }
}
