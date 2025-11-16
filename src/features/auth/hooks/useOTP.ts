import { api } from "@/services/api/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { OTPData } from "@/features/auth/types";
import Cookies from "js-cookie";

const validateOTP = async (data: OTPData) => {
  try {
    const response = await api.post("/auth/validate-otp/", data);
    Cookies.set("access", response.data.access, {
      expires: 1,
      secure: true,
    });
    Cookies.set("refresh", response.data.refresh, {
      expires: 7,
      secure: true,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data || axiosError.message;
  }
};

const useValidateOTP = () => {
  return useMutation({
    mutationFn: validateOTP,
  });
};

export default useValidateOTP;
