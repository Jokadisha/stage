import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { isAxiosError } from "axios";
import { LoginCredentials, AuthResponse } from "@/features/auth/types";
import axios from "axios";

class InactiveAccountError extends Error {
  email: string;

  constructor(message: string, email: string) {
    super(message);
    this.name = "InactiveAccountError";
    this.email = email;
  }
}

export const useAuth = () => {
  const loginMutation = useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      try {
        const response = await axios.post<AuthResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/token/`,
          credentials
        );

        Cookies.set("access", response.data.access, {
          expires: 1,
          secure: true,
        });
        Cookies.set("refresh", response.data.refresh, {
          expires: 7,
          secure: true,
        });

        return response.data;
      } catch (error) {
        console.log("la fameuse ereeur", error);
        if (isAxiosError(error)) {
          // Utilisation de isAxiosError ici
          const serverError = error.response?.data;

          if (serverError?.message === "Compte inactif. Un OTP a été envoyé.") {
            throw new InactiveAccountError(
              serverError.message,
              serverError.email
            );
          }

          const errorMessage =
            serverError?.detail || "Une erreur inconnue s'est produite";
          throw new Error(errorMessage);
        }
        throw new Error("erreur bizzare");
      }
    },
    onError: (error) => {
      if (error instanceof InactiveAccountError) {
        window.location.href = `/auth/email-verification?email=${encodeURIComponent(
          error.email
        )}`;
      }
    },
  });

  const logout = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
    window.location.href = "/";
  };

  return { login: loginMutation, logout };
};
