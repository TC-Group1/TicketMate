
import { useState, useEffect, FC } from 'react';
import config from '@/config';
import { User } from '@/types';

const useAuthentication = (username: string, password: string) => {

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL: string | undefined = config.NEXT_API_BASEURL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${baseURL}/api/user/user=${username}&password=${password}`);
        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, isLoading, error };
};

export default useAuthentication;
