import Axios from 'axios';

const getData = async dateDescriptor => {
  const url = `https://mvl-service.mutant.sh`;

  try {
    const response = await Axios.get(`${url}/${dateDescriptor}`);
    return response;
  } catch (err) {
    return { error: 'Unable to fetch' };
  }
};

export default getData;
