import { filter, size } from 'lodash';
import numeral from 'numeral';

const lambdaPath = process.env.REACT_APP_LAMBDA_PATH;

export function buildBatchRequest(userInput) {
  const promises = [];

  // parse stock symbols from user input
  const symbols = userInput.split(',').map((item) => item.trim());

  // structure the requests
  symbols.forEach((item) => {
    promises.push(
      fetch(`${lambdaPath}?symbol=${item}`).then((res) => res.json()),
    );
  });

  return promises;
}

export function getSymbolList(data) {
  return filter(data, (item) => item.symbol);
}

export function getSymbolMap(data) {
  return getSymbolList(data).reduce((o, item) => ({ ...o, [item.symbol.id]: item }), {});
}

export function getTotalTweetCount(data) {
  const total = getSymbolList(data).reduce((acc, o) => o.messages.length + acc, 0);
  return numeral(total).format('0,0');
}

export function getSymbolCount(data) {
  const count = size(data);
  const symbolStr = count === 1 ? 'symbol' : 'symbols';
  const numberOfSymbols = numeral(count).format('0,0');
  return `${numberOfSymbols} ${symbolStr}`;
}
