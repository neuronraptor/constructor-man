import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";


export class CommonEntity {

    @ApiProperty({ description: 'Object unique identifier = Primary key, assigned by DB on object first save' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Brief object reference for business correspondence' })
    @Column({ name: "code", length: 80 })
    code: string;

    @ApiProperty({ description: 'Timestamp info of this object was persisted' })
    @CreateDateColumn()
    createdDt: Date;

}