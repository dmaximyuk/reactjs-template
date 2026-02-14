import ky from "ky";

const headers: Record<string, string> = {};

export const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  headers,
  hooks: {
    beforeRequest: [
      // (request) => {
      //   const token = localStorage.getItem("access_token");
      //   if (token) {
      //     request.headers.set("Authorization", `Bearer ${token}`);
      //   }
      // },
    ],
    afterResponse: [
      // async (request, options, response) => {
      //   if (response.status === 401) {
      //     console.warn("Unauthorized. Maybe redirect to login.");
      //   }
      // },
    ],
  },
});

export default api;
