import { ICreateErnegyBill } from '@modules/ernegyBill/domain/models/ICreateErnegyBill';
import { IData } from '../models/IData';

export function sanitizeData(data: IData): ICreateErnegyBill {
  const sanitizedData = {
    clientNumber: data.clientNumber,
    readingDate: new Date(data.readingData.date),
    readingBill: Number(data.eletricBillData.value.replace(',', '')),
    eletricConsumed: Number(
      data.eletricConsumedData.consumedKWh.replace('.', ''),
    ),
    eletricBill: Number(data.eletricConsumedData.value.replace(',', '.')),
    sceeConsumed: Number(data.sceeData.consumedKWh.replace('.', '')),
    sceeBill: Number(data.sceeData.value.replace(',', '.')),
    compensedErnegy: Number(
      data.eletricConsumedData.consumedKWh.replace('.', ''),
    ),
    compensedBill: Number(data.eletricConsumedData.value.replace(',', '.')),
    publicLightingContribution: Number(
      data.publicLightingContribution.replace(',', '.'),
    ),
  };

  return sanitizedData;
}

export function getClientNumber(field: string) {
  return field.split(' ')[0];
}

export function getDateAndValue(field: string) {
  const splited = field.split(' ');
  const date = splited[0];
  const value = splited[2];
  return { date, value };
}

export function getEletricityKwhAndValue(field: string) {
  const splited = field.split(' ');
  const consumedKWh = splited[3];
  const value = splited[5];
  return { consumedKWh, value };
}

export function getEletricitySceeOrGDIKwhAndValue(field: string) {
  const splited = field.split(' ');
  const consumedKWh = splited[5];
  const value = splited[7];
  return { consumedKWh, value };
}

export function getIlumPublic(field: string) {
  return field.split(' ')[4];
}
