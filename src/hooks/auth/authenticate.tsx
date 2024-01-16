
import { useState, useEffect, FC } from 'react';
import config from '@/config';
import { User } from '@/types';
import { useQuery } from '@tanstack/react-query';

const authenticate = (username: string, password: string) => {

  const baseURL: string | undefined = config.NEXT_API_BASEURL;

  const {isPending, data, error } = useQuery({
  queryKey: ['userData'],
  queryFn: async () => {
    try {
      const response = await fetch(`${baseURL}/api/user/user=${username}&password=${password}`);
      const data = await response.json();
      return data;
    } catch (error: any) {
      return error;
    }
  }
 })

 return {isPending, data, error};

};

export default authenticate;
