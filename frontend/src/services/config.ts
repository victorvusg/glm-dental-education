import { MODE } from '../constants';

const LINKS = {
  [MODE.DEVELOPMENT]: 'http://13.40.188.162:8080',
  [MODE.PRODUCTION]: 'http://13.40.188.162:8080',
};

console.log(`Mode: ${import.meta.env.MODE}`);

export const API_URL = LINKS[import.meta.env.MODE];
