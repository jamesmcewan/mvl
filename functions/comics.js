const axios = require('axios');
const md5 = require('md5');

const privateKey = process.env.PRIVATE;
const publicKey = process.env.PUBLIC;

const getData = async (dateDescriptor) => {
  const source = 'https://gateway.marvel.com/v1/public/comics?';
  const ts = Date.now().toString();
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const url = `${source}dateDescriptor=${dateDescriptor}&apikey=${publicKey}&ts=${ts}&hash=${hash}`;

  try {
    const response = await axios.get(`${url}`);
    const { data } = await response;

    return data;
  } catch (err) {
    throw new Error();
  }
};

exports.handler = async (event) => {
  const safePaths = ['thisWeek', 'nextWeek', 'lastWeek'];
  const { week } = event.queryStringParameters;
  if (!safePaths.includes(week)) {
    return {
      statusCode: 500,
      body: `you don't have to go home but you can't stay here`
    };
  }

  try {
    const data = await getData(week);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `on no.`
    };
  }
};
