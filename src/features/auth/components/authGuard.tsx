// components/AuthGuard.tsx
"use client";
// import React, { ReactNode, useEffect } from "react";
// import { useAuthStore } from "@/features/auth/stores/authStores";
import { Loader2 } from "lucide-react"; // Exemple d'icône de chargement
import { useUser } from "../hooks/useUser";

type AuthGuardProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  // const { isAuthenticated, isLoading, checkAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  const { isLoading, data: user, } = useUser();

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" color="primary" />
      </div>
    );
  }

  return user?.user_id ? <>{children}</> : fallback || null;
}
