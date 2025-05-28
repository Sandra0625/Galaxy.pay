import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuLateral from '../components/MenuLateral';

export default function Dashboard1Screen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>

          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
              <Text style={styles.subGreeting}>Buenos días</Text>
            </View>
          </View>

          <Ionicons
            name="notifications-outline"
            size={24}
            color="#fff"
            style={styles.notificationIcon}
          />
        </View>

        {/* Aquí puedes añadir el contenido del dashboard */}
        <View style={styles.content}>
          <Text style={styles.contentText}>Contenido del Dashboard</Text>
        </View>
      </ScrollView>

      {/* Menú Lateral */}
      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1b1b1f',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subGreeting: {
    color: '#aaa',
    fontSize: 14,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
  contentText: {
    color: '#fff',
    fontSize: 18,
  },
});
