import LoginForm from "@/components/modules/auth/login/LoginForm";
import React from "react";
import styles from "./Login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
