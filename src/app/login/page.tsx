import LoginForm from "@/components/modules/auth/login/LoginForm";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Login as a tutor or student",
};

const LoginPage = () => {
  return (
    <div
    style={{
      backgroundImage: "url('/bg-01.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    className="flex flex-col min-h-[100vh] items-center justify-center"
  >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
