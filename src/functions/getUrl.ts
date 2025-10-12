const PUBLIC_KEY = import.meta.env.PUBLIC_KEY || process.env.PUBLIC_KEY
const PRIVATE_KEY = import.meta.env.PRIVATE_KEY || process.env.PRIVATE_KEY

const getUrl = (week: string) => {
  const source = 'https://gateway.marvel.com/v1/public/comics?'
  const ts = Date.now().toString()
  const hasher = new Bun.CryptoHasher('md5')
  const hash = `${ts}${PRIVATE_KEY}${PUBLIC_KEY}`
  hasher.update(hash)
  const url = `${source}dateDescriptor=${week}Week&apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hasher.digest('hex')}`

  return url
}

export default getUrl
