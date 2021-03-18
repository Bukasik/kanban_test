import axios from 'axios';
import { camelize, decamelize } from '../utils/keysConverter';

const client = axios.create();

const apiClient = {
  async get(url) {
    const response = await client.get(url);
    return camelize(response.data);
  },
  async post(url, params) {
    const response = await client.post(url, decamelize(params));
    return camelize(response.data);
  },
  async put(url, params) {
    const response = await client.put(url, params);
    return camelize(response.data);
  },
  async delete(url) {
    const response = await client.delete(url);
    return camelize(response.data);
  },
};

export default apiClient;
