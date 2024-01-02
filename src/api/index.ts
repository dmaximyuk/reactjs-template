import axios, { AxiosError } from "axios";

import { TokenError } from "store/models";

const API_URL = "https://api_url_example";

export const Api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

Api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token") || TokenError.NotFound;

    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "*",
        Authorization: token,
      },
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(undefined, async (error: AxiosError) => {
  if (error.status && [403].indexOf(error.status)) {
    localStorage.removeItem("token");
    location.reload();
  }

  return error;
});
