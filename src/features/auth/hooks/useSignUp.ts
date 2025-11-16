import { api } from "@/services/api/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { SignUpData } from "@/features/auth/types";

const signUp = async (data: SignUpData) => {
  try {
    const response = await api.post("/auth/register/", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export default useSignUp;
