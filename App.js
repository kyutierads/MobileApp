import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./assets/Navigation/BottomNav";
import LoginScreen from "./assets/Screen/LoginScreen";
import RegisterScreen from "./assets/Screen/RegisterScreen";
import CartScreen from "./assets/Screen/CartScreen"; // Import CartScreen
import HomeScreen from "./assets/Screen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="Bottom" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="CartScreen" component={CartScreen} /> 
          <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
