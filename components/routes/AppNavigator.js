import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageResidente from "../HomeResidente/HomePageResidente";
import BtnPanico from "../screens/BtnPanico"; // Importa BtnPanico correctamente
import BtnCuotas from "../screens/cuotas/BtnCuotas";
import DetallesCuotas from "../screens/cuotas/DetallesCuotas";
import PantallaPago from "../screens/cuotas/PantallaPago";
import BtnReportes from "../screens/Reportes/BtnReportes";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3396FE" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePageResidente}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Panico"
        component={BtnPanico}
        options={{
          title: "BOTÓN DE PANICO",
          headerStyle: {
            backgroundColor: "#FF2929",
          },
          headerTintColor: "#FFF", // Color del texto blanco
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Cuotas"
        component={BtnCuotas}
        options={{
          title: "Cuotas y Servicios",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="DetallesCuotas"
        component={DetallesCuotas}
        options={{ title: "Detalles de Pago" }}
      />
      <Stack.Screen
        name="Pago"
        component={PantallaPago}
        options={{ title: "Realizar Pago" }}
      />
      <Stack.Screen
        name="Reportes"
        component={BtnReportes}
        options={{ title: "Reportes" }}
      />
    </Stack.Navigator>
  );
}
// Elimina el cierre de llaves extra "}" al final
