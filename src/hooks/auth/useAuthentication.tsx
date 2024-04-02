import config from '@/config';
import { useQuery } from '@tanstack/react-query';

const useAuthentication = async (username: string, password: string) => {

  const baseURL: string | undefined = config.NEXT_API_BASEURL;
  const userAPIEndpoint: string | undefined = config.NEXT_API_USER_ENDPOINT;

  const data = await useAuthenticate(username, password);

  async function useAuthenticate (username: string, password: string) {
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

export default useAuthentication;
