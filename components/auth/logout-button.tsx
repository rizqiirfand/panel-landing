"use client";

import { logoutUser } from "@/app/actions/auth/logout";
import { Button } from "@heroui/react";
import { useState } from "react";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <Button isPending={isLoading} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
