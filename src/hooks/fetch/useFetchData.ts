import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api/axiosInstance";

const fetchData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const useFetchData = (endpoint: string, queryKey: string) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(endpoint),
    retry: false, // Désactive la réessaye auto si l'authentification échoue
  });
};
