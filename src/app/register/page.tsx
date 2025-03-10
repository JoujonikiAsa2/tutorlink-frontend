import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import React from "react";

export const metadata = {
  title: "Register",
  description: "Register as a tutor or student",
};

const RegisterPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg-01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col min-h-[100vh] items-center justify-center"
    >
      <div className="bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur w-full flex flex-col min-h-[100vh] items-center justify-center ">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
