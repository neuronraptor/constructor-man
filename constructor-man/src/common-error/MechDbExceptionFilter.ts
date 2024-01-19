import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { TypeORMError } from "typeorm";
import { MechException } from "./MechException";

@Catch(TypeORMError)
export class MechDbExceptionFilter implements ExceptionFilter {

    // constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: TypeORMError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message,
                timestamp: new Date().toISOString(),
                path: request.url
            })

        console.log('*** MechDbExceptionFilter.catch(...): ' + exception.message)
    }

}