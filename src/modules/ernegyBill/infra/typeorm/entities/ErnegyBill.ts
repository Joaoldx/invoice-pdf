import { IErnegyBill } from '@modules/ernegyBill/domain/models/IErnegyBill';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ernegyBill')
class ErnegyBill implements IErnegyBill {
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
  publicLightingContribution: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ErnegyBill;
