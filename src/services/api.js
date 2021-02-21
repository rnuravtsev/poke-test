import axios from "axios";

const BACKEND_URL = `https://pokeapi.co/api/v2/`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    // withCredentials: true,
    // headers: {
    //   "Access-Control-Allow-Origin": `*`,
    // },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
