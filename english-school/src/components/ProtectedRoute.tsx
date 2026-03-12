import { useContext, type ReactNode } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {

  const auth = useContext(AuthContext);

  if (auth?.loading) {
    return <div>Loading...</div>;
  }

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  return children;
}