import pb from "./config";

// Hooks for authentication

interface AuthData {
  email: string;
  password: string;
}

const useLogin = async ({ email, password }: AuthData) => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return { authData, authStore: pb.authStore };
  } catch (error) {
    return { error };
  }
};

const useLogout = () => {
  pb.authStore.clear();
};

const useRefresh = async () => {
  try {
    const authRefresh = await pb.collection("users").authRefresh();
    return { authRefresh, pbAuthStore: pb.authStore };
  } catch (error) {
    return { error };
  }
};

export { useLogin, useLogout, useRefresh };
