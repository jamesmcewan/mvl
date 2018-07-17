function getData(dateDescriptor) {
  const dataUrl =
    process.env.NODE_ENV === 'development'
      ? '//0.0.0.0:8080'
      : '//service.mvl.defuser.club';

  return fetch(`${dataUrl}/api/${dateDescriptor}`)
    .then(res => res.json())
    .catch(error => error);
}

export default getData;
