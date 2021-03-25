const axios = require('axios')
const md5 = require('md5')

const privateKey = process.env.PRIVATE
const publicKey = process.env.PUBLIC

//
// "code": 200,
// "status": "Ok",
// "attributionText": "Data provided by Marvel. © 2020 MARVEL",
// comics: [
//     {
//         id,
//         title,
//         issueNumber,
//         format,
//         thumbnail: {
//           path,
//           extension
//         },
//         creators: [
//           {
//             name,
//             role
//           }
//         ]
//     }
// ]

function mapData(response) {
  const {
    code,
    status,
    attributionText,
    data: { results }
  } = response

  const {
    creators: { items }
  } = results

  return { code, status, attributionText, results, items }
}

const getData = async (dateDescriptor) => {
  const source = 'https://gateway.marvel.com/v1/public/comics?'
  const ts = Date.now().toString()
  const hash = md5(`${ts}${privateKey}${publicKey}`)
  const url = `${source}dateDescriptor=${dateDescriptor}&apikey=${publicKey}&ts=${ts}&hash=${hash}`

  try {
    const response = await axios.get(`${url}`)
    const mappedData = mapData(response)

    return mappedData
  } catch (err) {
    throw new Error()
  }
}

module.exports = async (req, res) => {
  const { dateDescriptor } = req.query

  if (!dateDescriptor) {
    res.status(404).send('Not found')
    return
  }

  try {
    const data = await getData(dateDescriptor)
    res.status(200)
    res.json(data)
    return
  } catch (err) {
    res.status(500).send('soz')
  }
}
