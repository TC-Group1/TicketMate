import config from "@/config";
import { RegistrationFormData } from "@/types";
import { useMutation } from "@tanstack/react-query";

const Registration = () => {
  const baseURL: string | undefined = config.NEXT_API_BASEURL;
  const userAPIEndpoint: string | undefined =
    config.NEXT_API_REGISTRATION_ENDPOINT;

  const register = useMutation({
    mutationFn: async (requestBody: RegistrationFormData) => {
      if (requestBody !== null) {
        console.log("Request in mutate function: ", requestBody);
        const data = requestBody;
        // const response = await fetch(`${baseURL}${userAPIEndpoint}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(requestBody),
        // });

        // const data = await response.json();
        return data;
      } else console.log("No request body");
    },
  });

  return { register };
};

export default Registration;
