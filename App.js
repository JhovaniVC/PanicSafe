import "react-native-gesture-handler"; // Debe ser la primera línea
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/routes/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
