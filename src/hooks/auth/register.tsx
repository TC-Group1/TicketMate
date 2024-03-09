"use client";

import config from "@/config";
import { RegistrationFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useModal } from "@/features/modal/ModalContextProvider";

const Registration = () => {
  const baseURL: string | undefined = config.NEXT_API_BASEURL;
  const userAPIEndpoint: string | undefined =
    config.NEXT_API_REGISTRATION_ENDPOINT;

  const { isOpen } = useModal();

  const register = useMutation({
    mutationFn: async (requestBody: RegistrationFormData) => {
      if (requestBody !== null) {
        const response = await fetch(`${baseURL}${userAPIEndpoint}`, {
          // If endpoint isn't working, double check in env file
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        return data;
      } else console.log("No request body");
    },
    onSuccess: () => {
      !isOpen; // Close modal upon successful user creation
      console.log("Success User Creation");
    },
    onError: () => {
      console.error("Error creating user");
    },
  });

  return { register };
};

export default Registration;
