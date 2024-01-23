import { ApiProperty } from '@nestjs/swagger';
import { MechType } from 'src/mech_type/entities/mech_type.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'mech_component' })
export class MechComponent {
  // [x: string]: {};

  @ApiProperty({
    description:
      'Object unique identifier = Primary key, assigned by DB on object first save',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MechType, { nullable: false })
  @JoinColumn({ name: 'typeId' })
  @Index()
  type: MechType;

  @Column({ name: 'serialNo', length: 40, nullable: false })
  @Index({ unique: true })
  serialNumber: string;

  @ApiProperty({
    description: 'Brief object reference for business correspondence',
  })
  @Column({ name: 'code', length: 80 })
  code: string;

  @ApiProperty({ description: 'Timestamp info of this object was persisted' })
  @CreateDateColumn()
  createdDt: Date;

  holder: MechComponent;

  children: MechComponent[];
}
