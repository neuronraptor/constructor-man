import { HttpException, HttpStatus } from "@nestjs/common";

export class MechException extends HttpException {

    constructor(message: string) {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}