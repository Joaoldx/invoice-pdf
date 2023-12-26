import { readPdfPages } from 'pdf-text-reader';

export default async function ReaderPdf() {
  try {
    const pdfText = await readPdfPages({
      url: 'src/shared/pdfFiles/3000055479-06-2023.pdf',
    });
    const ernegyData = pdfText[0].lines.reduce(
      (acc, curr, currentIndex, array) => {
        if (curr.startsWith('Energia Elétrica')) {
          return Object.assign(acc, {
            ernegiaEletrica: getEletricityKwhAndValue(curr),
          });
        } else if (curr.startsWith('Energia SCEE s/ ICMS')) {
          return Object.assign(acc, {
            scee: getEletricitySceeOrGDIKwhAndValue(curr),
          });
        } else if (curr.startsWith('Energia compensada')) {
          return Object.assign(acc, {
            ermegiaCompensada: getEletricitySceeOrGDIKwhAndValue(curr),
          });
        } else if (curr.startsWith('Contrib Ilum Publica Municipal')) {
          return Object.assign(acc, { contrIlumPublica: getIlumPublic(curr) });
        } else if (curr.startsWith('Referente a')) {
          return Object.assign(acc, {
            dataLeitura: getDateAndValue(array[currentIndex + 3]),
          });
        } else if (curr.startsWith('Nº DO CLIENTE')) {
          return Object.assign(acc, {
            numCliente: getClientNumber(array[currentIndex + 2]),
          });
        } else {
          return acc;
        }
      },
    );
    return ernegyData;
  } catch (e) {
    console.log(e);
  }
}

function getClientNumber(field: string) {
  return field.split(' ')[0];
}

function getDateAndValue(field: string) {
  const splited = field.split(' ');
  const date = splited[0];
  const value = splited[2];
  return { date, value };
}

function getEletricityKwhAndValue(field: string) {
  const splited = field.split(' ');
  const consumedKWh = splited[3];
  const value = splited[5];
  return { consumedKWh, value };
}

function getEletricitySceeOrGDIKwhAndValue(field: string) {
  const splited = field.split(' ');
  const consumedKWh = splited[5];
  const value = splited[7];
  return { consumedKWh, value };
}

function getIlumPublic(field: string) {
  return field.split(' ')[4];
}
