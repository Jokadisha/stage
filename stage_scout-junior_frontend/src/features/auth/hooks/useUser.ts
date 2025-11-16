import { api } from "@/services/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/features/auth/types";

const getUser = async () => {
  try {
    const response = await api.get<User>("/auth/user/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    initialData: null,
    // staleTime: 1000 * 60 * 5,
  });
};

export { useUser };
