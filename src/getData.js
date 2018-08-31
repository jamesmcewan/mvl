function getData(dateDescriptor) {
  const API_KEY = process.env.REACT_APP_MARVEL_KEY;
  const dataUrl = 'https://gateway.marvel.com:443/v1/public/comics';

  return fetch(`${dataUrl}?dateDescriptor=${dateDescriptor}&apikey=${API_KEY}`)
    .then(res => res.json())
    .catch(error => error);
}

export default getData;
