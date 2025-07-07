// App.js
import React from "react";
import {View,Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import SignupScreen from "./screens/Signup";
import HomeScreen from "./screens/Home";
import Perfil from './screens/Perfil';
import ResetPassword from './screens/ResetPassword';
import Favourites from './screens/Favourites';
import Events from './screens/Events';
import EventDetails from './screens/EventDetails';
import { AuthProvider, useAuth } from "./context/AuthContext";

const Stack = createStackNavigator();

function AppNavigator() {
  const { user, loading } = useAuth();

 if (loading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Carregando...</Text>
    </View>
  );
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        )}
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
