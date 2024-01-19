import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMechComponentDto {

    @ApiProperty({ description: 'Existing MechType object ID to be referenced at', nullable: false })
    @IsNotEmpty()
    readonly typeId: number;

    @ApiProperty({ description: 'MechComponent Serial Number, unique', nullable: false, uniqueItems: true  })
    @IsNotEmpty()
    readonly serialNumber: string;

    
    @ApiProperty({ description: "Product reference: if specified, newly created component will be linked into this Product immediately", nullable: true, required: false })
    readonly productId?: number;

    @ApiProperty({ description: "Holder component: if specified, newly created component will be linked into HolderComponent immediately", nullable: true, required: false })
    readonly holderId?: number;



    @ApiProperty({ description: "Code - is a MechComponent breif title", nullable: true, required: false })
    readonly code?: string;

    // @IsNotEmpty()
    @ApiProperty({ description: "MechComponent title", nullable: true, required: false })
    readonly title: string;

}
