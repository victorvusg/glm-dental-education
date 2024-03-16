import axios from 'axios';
import { API_URL } from './config';

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getHealth() {
  try {
    const response = await axios.get(`/health`, {
      baseURL: API_URL,
      url: API_URL,
    });
  } catch (error) {
    //
  }
}

export { getHealth };
