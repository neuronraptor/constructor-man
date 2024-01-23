import { ApiProperty } from '@nestjs/swagger';
import { MechComponent } from 'src/mech_component/entities/mech_component.entity';
import { MechProduct } from 'src/mech_product/entities/mech_product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index(['product', 'component'], { unique: true })
@Entity({ name: 'mech_product_component' })
export class MechProductComponent {
  @ApiProperty({
    description:
      'Object unique identifier = Primary key, assigned by DB on object first save',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Brief object reference for business correspondence',
  })
  @Column({ name: 'code', length: 80, nullable: true })
  code: string;

  @ApiProperty({ description: 'Timestamp info of this object was persisted' })
  @CreateDateColumn()
  createdDt: Date;

  // @Column()
  @ManyToOne(() => MechProduct, { cascade: true })
  @JoinColumn()
  @Index()
  product: MechProduct;

  /**
   * This is the holder Component inside Product. If null, component field contain a top level component
   */
  // @Column()
  @ManyToOne(() => MechComponent, { cascade: true })
  @Index()
  holder?: MechComponent;

  // @Column()
  @ManyToOne(() => MechComponent, { cascade: false })
  @Index()
  component: MechComponent;
}
