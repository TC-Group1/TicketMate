"use client";

import { createContext, useState, useContext } from 'react';
import { User, UserContext } from '../../types';
import authenticate from '../../hooks/auth/authenticate';


const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children } : any) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

    const handleLoginSubmit = async (username: string, password: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        try{
          let userData = await authenticate(username, password);
          let user = userData.data;

          if(userData.error){
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
          if(isAuthenticated){ 
            setUser(user);
          }
          setIsLoading(userData.isPending);
        }catch (error: any) {
          setError(error.message);
        }
      };

    const providerProps = {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        error,
        setError,
        isLoading,
        setIsLoading,
        handleLoginSubmit,
    };
  


 return (
    <UserContext.Provider value={providerProps}>
        {children}
    </UserContext.Provider>
 )
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
  }