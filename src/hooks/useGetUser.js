"use client"
import { useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

const useGetUser = () => {
    const { isLoading, data: user = null, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            // const res = await axiosInstance.get('/user/profile');
            // console.log(res.data?.data)
            // return res.data?.data || null;
            const res = await fetch('https://magic-orb-server.vercel.app/api/v1/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
            })
            const data = await res.json();
            return data?.data || null;
        },
    })
    return [user, refetch, isLoading]
}

export default useGetUser;

