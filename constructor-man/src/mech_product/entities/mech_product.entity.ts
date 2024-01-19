import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "mech_product" })
export class MechProduct {

    @ApiProperty({ description: 'Object unique identifier = Primary key, assigned by DB on object first save' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Brief object reference for business correspondence' })
    @Column({ name: "code", length: 80, unique: true })
    @Index()
    code: string;

    @ApiProperty({ description: 'Timestamp info of this object was persisted' })
    @CreateDateColumn()
    createdDt: Date;

    @Column({ length: 250, unique: true })
    @Index()
    title: string;

    @Column({ type: "text", nullable: true })
    description: string;

}
