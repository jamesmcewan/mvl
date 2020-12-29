const replaceHttp = (url) => url.replace('http', 'https')

const getCover = ({ path, extension }) => `${replaceHttp(path)}.${extension}`

export default getCover
