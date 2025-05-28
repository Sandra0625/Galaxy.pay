import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard2Screen from '../screens/Dashboard2Screen';
import AssistantWelcomeScreen from '../screens/AssistantWelcomeScreen';
import ProfileStack from './ProfileStack'; // Importa el nuevo stack

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4c3b90',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard2Screen} />
      <Drawer.Screen name="Asistente Virtual" component={AssistantWelcomeScreen} />
      <Drawer.Screen name="Configuración" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

