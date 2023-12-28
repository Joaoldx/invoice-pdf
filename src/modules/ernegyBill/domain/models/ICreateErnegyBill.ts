export interface ICreateErnegyBill {
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
}
