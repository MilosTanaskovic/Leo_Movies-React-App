import axios from 'axios'
import { getBaseUrl } from './index'

// 'AUTH_TOKEN' - have to move somewhere safer!!! (.env.local)
const AUTH_TOKEN = "7c1dfb98061abe2e0a7af06ce4b4b7a3";

const request = (method, url, params) => {
  return axios(
    {
      method,
      url: `${getBaseUrl()}${url}`,
      params : {
        api_key: AUTH_TOKEN,
        ...params,
      },
    },
  );
};

export const get = (url, params) => request('GET', url, params);
