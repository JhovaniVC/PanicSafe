import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Components/Pages/Login";
import Register from "./src/Components/Pages/Register";
import Home from "./src/Components/Pages/Home";
import HomePageResidente from "./src/Components/Pages/HomeResidente/HomePageResidente";
import BtnPanico from "./src/Components/Pages/panico/BtnPanico";
import BtnCuotas from "./src/Components/Pages/cuotas/BtnCuotas";
import DetallesCuotas from "./src/Components/Pages/cuotas/DetallesCuotas";
import PantallaPago from "./src/Components/Pages/cuotas/PantallaPago";
import BtnReportes from "./src/Components/Pages/Reportes/BtnReportes";
import UserScreen from "./src/Components/Pages/HomeResidente/UserScreen";

// 1️⃣ Crear los navegadores (MainStack para Login/Register/Home, ResidentStack para el flujo del residente)
const MainStack = createNativeStackNavigator();
const ResidentStack = createNativeStackNavigator();

// 2️⃣ Navegador anidado para las pantallas del residente
function ResidentNavigator() {
  return (
    <ResidentStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3396FE" }, // Azul por defecto
        headerTintColor: "white", // Texto blanco
      }}
    >
      <ResidentStack.Screen
        name="HomeResidente"
        component={HomePageResidente}
        options={{ headerShown: false }} // Oculta el header en HomeResidente
      />
      <ResidentStack.Screen
        name="Panico"
        component={BtnPanico}
        options={{
          title: "BOTÓN DE PÁNICO",
          headerStyle: { backgroundColor: "#FF2929" }, // Rojo para emergencia
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <ResidentStack.Screen
        name="Cuotas"
        component={BtnCuotas}
        options={{
          title: "Cuotas y Servicios",
          headerStyle: { backgroundColor: "#fff" }, // Blanco para esta sección
          headerTintColor: "black",
        }}
      />
      <ResidentStack.Screen
        name="DetallesCuotas"
        component={DetallesCuotas}
        options={{ title: "Detalles de Pago" }}
      />
      <ResidentStack.Screen
        name="Pago"
        component={PantallaPago}
        options={{ title: "Realizar Pago" }}
      />
      <ResidentStack.Screen
        name="Reportes"
        component={BtnReportes}
        options={{ title: "Reportes" }}
      />
      <ResidentStack.Screen
        name="User"
        component={UserScreen}
        options={{ title: "Mi Cuenta" }}
      />
    </ResidentStack.Navigator>
  );
}

// 3️⃣ Navegador principal (contiene Login, Register, Home y el flujo del residente)
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        {/* Pantallas de autenticación */}
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Login sin header
        />
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{ title: "Registro de usuario" }} // Título personalizado
        />

        {/* Home principal (después de Login/Register) */}
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: null, // Oculta el botón de retroceso
            title: "Inicio",
          }}
        />

        {/* Flujo del residente (se accede desde Home) */}
        <MainStack.Screen
          name="Residente"
          component={ResidentNavigator}
          options={{ headerShown: false }} // Oculta header al entrar al flujo
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
