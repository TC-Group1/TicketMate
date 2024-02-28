"use client";

import config from "@/config";
import { RegistrationFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SetStateAction, useContext } from "react";
import { useModal } from "@/features/modal/ModalContextProvider";

const Registration = () => {
  const baseURL: string | undefined = config.NEXT_API_BASEURL;
  const userAPIEndpoint: string | undefined =
    config.NEXT_API_REGISTRATION_ENDPOINT;

  const { isOpen, setIsOpen } = useModal();

  const router = useRouter();

  const register = useMutation({
    mutationFn: async (requestBody: RegistrationFormData) => {
      if (requestBody !== null) {
        console.log("Request in mutate function: ", requestBody);
        const response = await fetch(`${baseURL}${userAPIEndpoint}`, {
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
      // setIsOpen(false) // Close Modal On Success
      console.log("Success User Creation");
    },
    onError: () => {
      console.error("Error creating user");
    },
  });

  return { register };
};

export default Registration;
