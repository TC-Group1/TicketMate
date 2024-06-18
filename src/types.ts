import { CSSProperties, ReactNode } from "react";

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
    phoneNumber: string | undefined;
}

export interface Ticket {
    id: number | undefined;
    title: string | undefined;
    assignees: Array<string> | undefined;
    priority: string | undefined;
    dateCreated: string | undefined;
    createdBy : string | undefined;
    status: string | undefined;
    lastModified: string | undefined;
    description: string | undefined;
}

export interface Project {
    id: number | undefined;
    name: string | undefined;
    team: Array<User> | undefined;
    tickets: Array<Ticket> | undefined;
    isActive: boolean | undefined;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: Boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<Boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading: Boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  submitLogin: (
    username: string,
    password: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

// is "| null" necessary for registration? If so, why?
export interface RegistrationFormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string; // should type be a number or a string?
  password: string;
}

// Interface for modal
export interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
