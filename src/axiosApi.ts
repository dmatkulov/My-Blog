import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://matkulov-1052d-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;