import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OptionCard = ({ title, required, expanded, onToggle, children, accepted, onAccept, onReject, theme }) => {
  const isDark = theme === 'dark';

  return (
    <View style={{ backgroundColor: isDark ? '#3c3c3c' : '#f2f2f2' }} className="p-3 rounded-xl mb-3">
      <TouchableOpacity className="flex-row justify-between items-center" onPress={onToggle}>
        <Text style={{ color: isDark ? '#fff' : '#000' }} className="text-sm font-medium">
          {title} {!required && <Text style={{ color: isDark ? '#bbb' : '#888' }}>Opcional</Text>}
        </Text>
        <View className={`w-5 h-5 border-2 rounded-full ${accepted ? 'bg-pink-500 border-pink-500' : isDark ? 'border-white' : 'border-black'}`} />
      </TouchableOpacity>
      {expanded && (
        <View style={{ backgroundColor: isDark ? '#444' : '#e6e6e6' }} className="mt-3 p-3 rounded-lg">
          <Text style={{ color: isDark ? '#fff' : '#000' }} className="text-sm mb-3">{children}</Text>
          <View className="flex-row justify-between">
            {onReject && (
              <TouchableOpacity onPress={onReject}>
                <Text className="text-[#FF9D9D] font-bold">No, gracias</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onAccept} style={{ backgroundColor: isDark ? '#666' : '#ccc' }} className="px-4 py-2 rounded-lg">
              <Text style={{ color: isDark ? '#fff' : '#000' }}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default function RegisterStep7Screen() {
  const [expanded, setExpanded] = useState(null);
  const [accepted, setAccepted] = useState({
    terms: false,
    privacy: false,
    contacts: false,
    updates: false,
    partners: false,
  });

  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const toggleExpanded = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  const setAccept = (key, value = true) => {
    setAccepted({ ...accepted, [key]: value });
    setExpanded(null);
  };

  const allRequiredAccepted = accepted.terms && accepted.privacy;

  return (
    <View style={{ backgroundColor: isDark ? '#1E1E1E' : '#fff' }} className="flex-1 p-5">
      <ScrollView>
        <View className="items-center mb-6">
          <Text style={{ color: isDark ? '#fff' : '#000' }} className="text-lg font-medium text-center">
            Para crear una cuenta Galaxy Pay, por favor acepta los términos y condiciones.
          </Text>
        </View>

        {[
          {
            key: 'terms',
            title: 'Términos y condiciones',
            required: true,
            content:
              'Solicito una cuenta corriente galaxy pay y acepto el contrato de licencia de la app...',
          },
          {
            key: 'privacy',
            title: 'Política de Privacidad',
            required: true,
            content:
              'La Política de Privacidad de galaxy pay aplica y el contenido está disponible...',
          },
          {
            key: 'contacts',
            title: 'Visibilidad para contactos',
            required: false,
            content:
              'Habilita la visibilidad para aprovechar todas las funciones de la app galaxy pay...',
          },
          {
            key: 'updates',
            title: 'Actualizaciones',
            required: false,
            content:
              'Puedes habilitar la opción de recibir notificaciones sobre novedades...',
          },
          {
            key: 'partners',
            title: 'Partnerships',
            required: false,
            content:
              'Por este medio, consiento a que galaxy pay envíe mi dirección de correo electrónico...',
          },
        ].map(({ key, title, required, content }) => (
          <OptionCard
            key={key}
            title={title}
            required={required}
            expanded={expanded === key}
            accepted={accepted[key]}
            onToggle={() => toggleExpanded(key)}
            onAccept={() => setAccept(key)}
            onReject={required ? null : () => setAccept(key, false)}
            theme={theme}
          >
            {content}
          </OptionCard>
        ))}

        <TouchableOpacity
          disabled={!allRequiredAccepted}
          className={`mt-6 py-4 rounded-xl ${allRequiredAccepted ? 'bg-pink-500' : 'bg-pink-300'}`}
        >
          <Text className="text-white text-center font-medium text-base">
            Crear mi cuenta galaxy pay
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
