import { ApiProperty } from "@nestjs/swagger";

export class CreateMechProductComponentDto {

    @ApiProperty({ description: "Existing Product reference ID", required: true })
    readonly productId: number;

    @ApiProperty({ description: "Existing Component reference ID as a Holder (master or parent component). If ommited, this is a top level component", required: false })
    readonly holderId?: number;

    @ApiProperty({ description: "Existing Component reference ID as a Child (child component)", required: true })
    readonly componentId: number;

    constructor (productId: number, holderId:number, componentId: number) {
        this.productId = productId;
        this.holderId = holderId;
        this.componentId = componentId;
    }
}
