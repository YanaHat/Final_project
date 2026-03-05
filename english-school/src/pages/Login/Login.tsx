import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth?.login(email);
    navigate("/");
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input type="email" name="login" id="login" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <button type="submit">Login</button>
    </form>
  );
}