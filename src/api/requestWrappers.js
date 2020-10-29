import axios from 'axios'
import { getBaseUrl } from './index'

const request = (method, url, payload, headers, options = {}) => {

  return axios(
    {
      method,
      url: `${getBaseUrl()}${url}`,
      headers,
      data: options.overrideData ? payload : {
        ...payload,
      },
    },
  )
}

export const get = (url, headers) => request('GET', url, null, headers)
