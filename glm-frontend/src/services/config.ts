import { MODE } from '../constants';

const LINKS = {
  [MODE.DEVELOPMENT]: ':8080',
  [MODE.PRODUCTION]: '3.8.132.73:8080',
};

console.log(`Mode: ${import.meta.env.MODE}`);

export const API_URL = LINKS[import.meta.env.MODE];
