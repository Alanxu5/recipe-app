import axios from 'axios';
// import myApp from '@/main';

const baseDomain = 'http://localhost:8000';
const baseURL = `${baseDomain}/api`;

export const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Context-Type": "application/json"
  }
});

// httpClient.interceptors.request.use(async (config) => {
//     const token = await myApp.$auth.getTokenSilently(); 
//     config.headers['Authorization'] = `Bearer ${token}`;
//     return config
//   }, (error) => {
//     return Promise.reject(error);
//  })