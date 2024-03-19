import { MODE } from '../constants';

const LINKS = {
  [MODE.DEVELOPMENT]: 'http://52.56.89.103:8080',
  [MODE.PRODUCTION]: 'http://52.56.89.103:8080',
};

console.log(`Mode: ${import.meta.env.MODE}`);

export const API_URL = LINKS[import.meta.env.MODE];
