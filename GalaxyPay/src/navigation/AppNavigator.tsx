import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens de autenticación y registro
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterStep1Screen from '../screens/RegisterStep1Screen';
import RegisterStep2Screen from '../screens/RegisterStep2Screen';
import RegisterStep3Screen from '../screens/RegisterStep3Screen';
import RegisterStep4Screen from '../screens/RegisterStep4Screen';
import RegisterStep5Screen from '../screens/RegisterStep5Screen';
import RegisterStep6Screen from '../screens/RegisterStep6Screen';
import RegisterStep7Screen from '../screens/RegisterStep7Screen';
import RegisterStep8Screen from '../screens/RegisterStep8Screen';
import RegisterStep9Screen from '../screens/RegisterStep9Screen';
import LoginScreen from '../screens/LoginScreen';

// Recuperación de contraseña
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pantallas de bienvenida y autenticación
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterStep1Screen from '../screens/RegisterStep1Screen';
import RegisterStep2Screen from '../screens/RegisterStep2Screen';
import RegisterStep3Screen from '../screens/RegisterStep3Screen';
import RegisterStep4Screen from '../screens/RegisterStep4Screen';
import RegisterStep5Screen from '../screens/RegisterStep5Screen';
import RegisterStep6Screen from '../screens/RegisterStep6Screen';
import RegisterStep7Screen from '../screens/RegisterStep7Screen';
import RegisterStep8Screen from '../screens/RegisterStep8Screen';
import RegisterStep9Screen from '../screens/RegisterStep9Screen';
import LoginScreen from '../screens/LoginScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

// Pantallas del asistente virtual
import AssistantWelcomeScreen from '../screens/AssistantWelcomeScreen';
import AssistantChatScreen from '../screens/AssistantChatScreen';

// Pantalla de notificaciones
import NotificationsScreen from '../screens/NotificationsScreen';

// Drawer principal
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="RegisterStep1" component={RegisterStep1Screen} />
      <Stack.Screen name="RegisterStep2" component={RegisterStep2Screen} />
      <Stack.Screen name="RegisterStep3" component={RegisterStep3Screen} />
      <Stack.Screen name="RegisterStep4" component={RegisterStep4Screen} />
      <Stack.Screen name="RegisterStep5" component={RegisterStep5Screen} />
      <Stack.Screen name="RegisterStep6" component={RegisterStep6Screen} />
      <Stack.Screen name="RegisterStep7" component={RegisterStep7Screen} />
      <Stack.Screen name="RegisterStep8" component={RegisterStep8Screen} />
      <Stack.Screen name="RegisterStep9" component={RegisterStep9Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      <Stack.Screen name="CodeVerification" component={VerificationCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="AssistantWelcome" component={AssistantWelcomeScreen} />
      <Stack.Screen name="AssistantChat" component={AssistantChatScreen} />

      {/* Nueva pantalla de notificaciones */}
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;



