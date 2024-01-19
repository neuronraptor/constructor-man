import { ApiProperty } from "@nestjs/swagger";

export class CommonEntityDto {

    @ApiProperty({ description: 'Object unique identifier = Primary key' })
    readonly id: number;

    @ApiProperty({ description: 'Unique object reference for business correspondence' })
    readonly code: string;

    @ApiProperty({ description: 'Timestamp info of this object was persisted' })
    readonly createdDt: string;

}