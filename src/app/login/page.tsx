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
      backgroundImage: "url('/bg-01.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    className=""
  >
    <div className="bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur w-full flex flex-col min-h-[100vh] items-center justify-center ">
      <LoginForm />
    </div>
    </div>
  );
};

export default LoginPage;
