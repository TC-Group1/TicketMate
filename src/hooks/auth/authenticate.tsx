
import { useState, useEffect, FC } from 'react';
import config from '@/config';
import { User } from '@/types';
import { useQuery } from '@tanstack/react-query';

const getAuthentication = async (username: string, password: string) => {

  const baseURL: string | undefined = config.NEXT_API_BASEURL;
  const userAPIEndpoint: string | undefined = config.NEXT_API_USER_ENDPOINT;

  const data = await authenticate(username, password);

  async function authenticate (username: string, password: string) {
    const {isPending, data, error } = useQuery({
      queryKey: ['userData'],
      queryFn: async () => {
        try {
          const response = await fetch(`${baseURL}${userAPIEndpoint}/user=${username}&password=${password}`, {method: 'POST'});
          const data = await response.json();
          return data;
        } catch (error: any) {
          return error;
        }
      }
     })
     return {isPending, data, error};
  }
 
return { isPending: data.isPending, data: data.data, error: data.error ? data.error : null};
};

export default getAuthentication;
