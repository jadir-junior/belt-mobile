import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { Loading } from "../components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../contexts/Auth";

export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
