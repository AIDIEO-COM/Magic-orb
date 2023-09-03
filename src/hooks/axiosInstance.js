'use client'
import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://magic-orb-server-five.vercel.app/api/v1', 
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;