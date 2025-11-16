type LoginCredentials = {
  email: string;
  password: string;
};

type AuthResponse = {
  access: string;
  refresh: string;
};

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
};

interface User {
  user_id: string;
  fullname: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  birthdate: string;
  gender: string;
  image_url: string;
  is_active: boolean;
}

interface SignUpData {
  full_name: string;
  username: string;
  email: string;
  password: string;
  role?: string;
}

interface OTPData {
  email: string;
  code: string;
}

export type {
  LoginCredentials,
  AuthResponse,
  AuthState,
  User,
  SignUpData,
  OTPData,
};
