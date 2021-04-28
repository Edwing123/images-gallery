import { API_KEYS, UNSPLASH_ENDPOINTS } from "./constants";

export const buildEndpoint = (type, queryParams) => {
  const url = `
    ${UNSPLASH_ENDPOINTS.base}
    ${UNSPLASH_ENDPOINTS[type]}/?client_id=${API_KEYS.UNSPLASH}
    &${queryParams}
    `;

  return url.replace(/\n|\s*/g, '');
};
