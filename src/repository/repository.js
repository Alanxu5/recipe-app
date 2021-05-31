import axios from 'axios';

const baseDomain = 'http://localhost:8000';
const baseURL = `${baseDomain}/api`;

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Context-Type": "application/json",
    Accept: 'application/json'
  }
});

export default apiClient;