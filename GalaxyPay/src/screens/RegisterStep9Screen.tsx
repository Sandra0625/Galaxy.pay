import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GalaxyLogo from './assets/galaxy_logo1.svg'; // Asegúrate de tener el path correcto

export default function RegisterStep9Screen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const backgroundColor = isDark ? '#1E1E1E' : '#FFFFFF';
  const subtitleColor = isDark ? '#CCCCCC' : '#333333';

  return (
    <View style={{ flex: 1, backgroundColor, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      {/* Logo */}
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        <GalaxyLogo width={150} height={40} />
      </View>

      {/* Check icon */}
      <Ionicons name="checkmark-circle" size={48} color="#FF2D9B" style={{ marginBottom: 24 }} />

      {/* Main title */}
      <Text style={{ color: '#FF2D9B', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
        Verificación completada
      </Text>

      {/* Description */}
      <Text style={{ color: subtitleColor, fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
        Su email ha sido verificado con éxito, ahora ya puede acceder a Galaxy Pay usando su dirección de email y contraseña.
      </Text>

      {/* Spacer */}
      <View style={{ flex: 1 }} />

      {/* Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FF2D9B',
          paddingVertical: 14,
          paddingHorizontal: 40,
          borderRadius: 12,
          width: '100%',
          alignItems: 'center',
          marginTop: 32,
        }}
        onPress={() => {
          // Aquí puedes navegar a la pantalla de login
          console.log('Iniciar sesión presionado');
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
