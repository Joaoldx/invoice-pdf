export interface IErnegyBill {
  id: string;
  clientNumber: string;
  readingDate: Date;
  readingBill: number;
  eletricConsumed: number;
  eletricBill: number;
  sceeConsumed: number;
  sceeBill: number;
  compensedErnegy: number;
  compensedBill: number;
  publicLightingContribution: number;
  created_at: Date;
  updated_at: Date;
}
