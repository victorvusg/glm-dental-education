import axios from 'axios';
import { API_URL } from './config';

axios.defaults.baseURL = API_URL;

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getHealth() {
  try {
    const response = await axios.get(`/health`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    //
  }
}

async function processMessage(message: string) {
  try {
    const response = await axios.post(
      `/process_message`,
      {
        history: [
          {
            content: 'You are nice assistant. Be nice.',
            role: 'system',
          },
          {
            content: message,
            role: 'user',
          },
        ],
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    return response.data;
  } catch (error) {
    //
    return 'Error: There is something wrong!';
  }
}

export { getHealth, processMessage };
