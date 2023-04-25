import axios from 'axios';

const API_URL = 'http://localhost:3001';

export async function login(username, password) {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
}
