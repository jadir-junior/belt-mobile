import { Button, Text, View } from "react-native";

import React from "react";
import { useAuth } from "../contexts/Auth";

export default function HomeScreen() {
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
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={auth.signOut} />
    </View>
  );
}
