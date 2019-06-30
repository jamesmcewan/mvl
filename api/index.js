const axios = require("axios");
const md5 = require("md5");

const privateKey = process.env.PRIVATE;
const publicKey = process.env.PUBLIC;

const getData = async dateDescriptor => {
  const source = "https://gateway.marvel.com/v1/public/comics?";
  const ts = Date.now().toString();
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const url = `${source}dateDescriptor=${dateDescriptor}&apikey=${publicKey}&ts=${ts}&hash=${hash}`;

  console.log("trying url", url);

  try {
    const response = await axios.get(`${url}`);
    const { data } = await response;

    return data;
  } catch (err) {
    throw new Error();
  }
};

module.exports = async (req, res) => {
  const { dateDescriptor } = req.query;

  if (!dateDescriptor) {
    res.status(404).send("Not found");
    return;
  }

  try {
    const data = await getData(dateDescriptor);
    res.status(200);
    res.json(data);
    return;
  } catch (err) {
    res.status(500).send("soz");
  }
};
