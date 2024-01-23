import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { MechException } from './MechException';

@Catch(MechException)
export class MechExceptionFilter implements ExceptionFilter {
  // constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: MechException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });

    console.log('*** MechExceptionFilter.catch(...): ' + exception.message);
  }
}
