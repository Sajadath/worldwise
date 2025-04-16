import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
export default function Login() {
  const { login, isAuthenicated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenicated);

    if (isAuthenicated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenicated, navigate]);

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("sajad@example.com");
  const [password, setPassword] = useState("qwerty");

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  return (
    <main className={styles.login}>
      <PageNav></PageNav>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type={"primary"}>LOGIN</Button>
        </div>
      </form>
    </main>
  );
}
