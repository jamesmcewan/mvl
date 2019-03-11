function getData(dateDescriptor) {
  const dataUrl = 'https://mvl-service.mutant.sh';

  return fetch(`${dataUrl}/${dateDescriptor}`)
    .then(res => res.json())
    .catch(error => error);
}

export default getData;
