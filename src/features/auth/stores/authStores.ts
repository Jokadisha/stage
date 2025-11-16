import { create } from "zustand";
import { api } from "@/services/api/axiosInstance";
import { User, AuthState } from "@/features/auth/types";

const getUser = async () => {
  try {
    const response = await api.get<User>("/auth/user/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: true,

  checkAuth: async () => {
    try {
      const data = await getUser();

      set({ isAuthenticated: !!data.user_id, isLoading: false });
    } catch (error) {
      console.error(
        "Erreur lors de la vérification de l'authentification",
        error
      );
      set({ isAuthenticated: false, isLoading: false });
    }
  },
}));
