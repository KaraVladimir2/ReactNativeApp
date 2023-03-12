import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import CompetitionScreen from "./screens/CompetitionScreen";
import LoadingScreen from "./screens/LoadingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Competition" component={CompetitionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
