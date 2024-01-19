import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CreateMechTypeDto {

    @ApiProperty({ description: 'Part number info of this Type Object', nullable: false })
    @IsNotEmpty()
    readonly partNumber: string;
    
    @ApiProperty({ description: 'Title info of this object', nullable: false })
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({ description: 'Parent MechType object ID, if it has', nullable: true, required: false })
    readonly parentId?: number;

    @ApiProperty({ description: 'Brief business object title reference, for convenience', nullable: true, required: false })
    readonly code?: string;

}
