import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "mech_type" })
export class MechType {

    @ApiProperty({ description: 'Object unique identifier = Primary key, assigned by DB on object first save' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Brief object reference for business correspondence' })
    @Column({ name: "code", length: 80 })
    code: string;

    @ApiProperty({ description: 'Timestamp info of this object was persisted' })
    @CreateDateColumn()
    createdDt: Date;

    @ManyToOne(() => MechType)
    @JoinColumn({ name: "parent_id" })
    @Index()
    parent: MechType;

    @Column({ length: 250, nullable: false })
    @Index({ unique: true })
    title: string;

    @Column({ name: "part_no", length: 40, nullable: false })
    @Index({ unique: true })
    partNumber: string

}
