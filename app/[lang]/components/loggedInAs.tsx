import { useAuth } from "@/context/AuthContext";

const LoggedInAs = async ({ email }: { email: string }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <>
      <h2 className="text-center text-tdk-blue-400">Logget ind som: {email}</h2>
    </>
  );
};

export default LoggedInAs;
