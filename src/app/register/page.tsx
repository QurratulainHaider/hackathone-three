"use client"; // Add this line at the top

import { RegisterForm } from "@/components/RegisterForm";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FC } from "react";

const RegisterPage: FC = () => {
  const router = useRouter();

  // Define the onSuccess function
  const handleSuccess = () => {
    console.log("Registration successful!");
    router.push("/login"); // Redirect to login page after successful registration
  };

  return (
    <div>
      <h1>Register</h1>
      {/* Pass the handleSuccess function to RegisterForm */}
      <RegisterForm onSuccess={handleSuccess} />
    </div>
  );
};

export default RegisterPage;