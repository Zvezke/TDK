import { createSupabaseFrontendClient } from "./frontendClient";

interface AuthData {
  email: string;
  password: string;
}

const useLogin = async ({ email, password }: AuthData) => {
  const supabase = createSupabaseFrontendClient();
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return { data, error };
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export { useLogin };
