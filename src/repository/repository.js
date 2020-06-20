import axios from 'axios';
import { getInstance } from '@/auth/index.js';

const baseDomain = 'http://localhost:8000';
const baseURL = `${baseDomain}/api`;

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Context-Type": "application/json",
    Accept: 'application/json'
  }
});

apiClient.interceptors.request.use(async request => {
    const authService = getInstance();
    const token =  authService ? await authService.getTokenSilently() : undefined;
    request.headers.authorization = `bearer ${token}`;
    return request
});

export default apiClient;