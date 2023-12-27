import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ernegy-bill')
class ErnegyBill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientNumber: string;

  @Column()
  readingDate: Date;

  @Column('decimal')
  readingBill: number;

  @Column('int')
  eletricConsumed: number;

  @Column('decimal')
  eletricBill: number;

  @Column('int')
  sceeConsumed: number;

  @Column('decimal')
  sceeBill: number;

  @Column('int')
  compensedErnegy: number;

  @Column('decimal')
  compensedBill: number;

  @Column('decimal')
  publicLightingContribuition: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ErnegyBill;
