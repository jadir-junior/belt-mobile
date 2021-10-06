import { Button, Text, View } from "react-native";

import React from "react";
import { useAuth } from "../contexts/Auth";

export const LoginScreen = () => {
  const auth = useAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d1d1d1",
      }}
    >
      <Text>Login Page</Text>
      <Button title="Log in" onPress={auth.signIn} />
    </View>
  );
};
