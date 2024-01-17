
import { CSSProperties } from 'react';

export interface StyleSheet {
    [key: string]: CSSProperties;
  }

export interface User {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    avatar: string | undefined;
    role: string | undefined;
}

export interface UserContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isAuthenticated: Boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<Boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    isLoading: Boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
    handleLoginSubmit: (username: string, password: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface Ticket {
    feature: string | undefined;
    assignees: Array<string> | undefined;
    priority: string | undefined;
    dateCreated: string | undefined;
    status: string | undefined;
    documentation: string | undefined;
    files: Array<string> | undefined;
}