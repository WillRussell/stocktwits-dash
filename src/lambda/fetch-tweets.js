/* eslint-disable */

import axios from 'axios';

const apiUrl = 'https://api.stocktwits.com/api/2/streams/symbol';
const headers = {
  headers: {
    Accept: 'application/json',
  },
};

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { symbol } = event.queryStringParameters;
  const stocktwitsQuery = `${apiUrl}/${symbol}.json`;

  try {
    const response = await axios.get(stocktwitsQuery, headers);
    const { messages, symbol } = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify({ messages, symbol }),
    };
  } catch (error) {
    if (error.response) {
      const { errors } = error.response.data;
      return {
        statusCode: error.response.data.response.status,
        body: JSON.stringify(errors),
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal server error' }),
      }
    }
  }
}
