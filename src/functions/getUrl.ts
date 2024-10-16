import { Md5 } from 'ts-md5/dist/md5.js'

const PUBLIC_KEY = import.meta.env.PUBLIC_KEY || process.env.PUBLIC_KEY
const PRIVATE_KEY = import.meta.env.MARVEL_KEY || process.env.PUBLIC_KEY

const getUrl = (week: string) => {
  const source = 'https://gateway.marvel.com/v1/public/comics?'
  const ts = Date.now().toString()
  const hash = Md5.hashStr(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
  const url = `${source}dateDescriptor=${week}Week&apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`

  return url
}

export default getUrl
