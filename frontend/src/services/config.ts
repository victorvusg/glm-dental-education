import { MODE } from '../constants';

const LINKS = {
  [MODE.DEVELOPMENT]: 'http://18.132.39.64:8080',
  [MODE.PRODUCTION]: 'http://18.132.39.64:8080',
};

console.log(`Mode: ${import.meta.env.MODE}`);

export const API_URL = LINKS[import.meta.env.MODE];
