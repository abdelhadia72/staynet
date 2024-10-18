import { useMutation } from "@tanstack/react-query";
import { login, signup } from "@/lib/api";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginData) => login(data.email, data.password),
  });
};

const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupData) =>
      signup(data.email, data.password, data.username),
  });
};

export { useLogin, useSignup };
