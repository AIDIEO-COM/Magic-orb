"use client"
import { useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://magic-orb-server-five.vercel.app/api/v1', 
});

const useAxiosSecure = () => { 
  console.log(token)
  useEffect(() => {
    console.log('called')
    const token = JSON.parse(localStorage.getItem('token'));
    axiosInstance.interceptors.request.use((config) => {
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // await logOut();
          // navigate('/login');
          console.log(error.response)
        }
        return Promise.reject(error);
      }
    );
  }, [token]);

  return [axiosInstance];
};

export default useAxiosSecure;