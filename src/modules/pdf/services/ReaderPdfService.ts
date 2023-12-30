import { readPdfPages } from 'pdf-text-reader';
import fs from 'fs';
import StorePdfService from './StorePdfService';
import { IData } from '../models/IData';
import {
  getClientNumber,
  getDateAndValue,
  getEletricityKwhAndValue,
  getEletricitySceeOrGDIKwhAndValue,
  getIlumPublic,
} from '../helper/Sanitize';

export default async function ReaderPdf() {
  const PDF_DIR_PATH = 'src/shared/pdfFiles/';

  try {
    const filesDir = fs.readdirSync(PDF_DIR_PATH);

    const filesData = [];

    for (const fileName of filesDir) {
      const filePath = PDF_DIR_PATH + fileName;

      const pdfText = await readPdfPages({
        url: filePath,
      });
      const ernegyData = pdfText[0].lines.reduce(
        (acc, curr, currentIndex, array) => {
          if (curr.startsWith('Energia Elétrica')) {
            return Object.assign(acc, {
              eletricBillData: getEletricityKwhAndValue(curr),
            });
          } else if (curr.startsWith('Energia SCEE s/ ICMS')) {
            return Object.assign(acc, {
              sceeData: getEletricitySceeOrGDIKwhAndValue(curr),
            });
          } else if (curr.startsWith('Energia compensada')) {
            return Object.assign(acc, {
              eletricConsumedData: getEletricitySceeOrGDIKwhAndValue(curr),
            });
          } else if (curr.startsWith('Contrib Ilum Publica Municipal')) {
            return Object.assign(acc, {
              publicLightingContribution: getIlumPublic(curr),
            });
          } else if (curr.startsWith('Referente a')) {
            return Object.assign(acc, {
              readingData: getDateAndValue(array[currentIndex + 3]),
            });
          } else if (curr.startsWith('Nº DO CLIENTE')) {
            return Object.assign(acc, {
              clientNumber: getClientNumber(array[currentIndex + 2]),
            });
          } else {
            return acc;
          }
        },
      );
      filesData.push(ernegyData);
    }
    StorePdfService(filesData as unknown as IData[]);
  } catch (e) {
    console.log(e);
  }
}
