export interface IData {
  eletricBillData: { consumedKWh: string; value: string };
  sceeData: { consumedKWh: string; value: string };
  eletricConsumedData: { consumedKWh: string; value: string };
  publicLightingContribution: string;
  readingData: { date: string; value: string };
  clientNumber: string;
}
