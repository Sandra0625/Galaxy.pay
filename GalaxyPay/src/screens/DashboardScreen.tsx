import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleChatbotPress = () => {
    navigation.navigate('Assistant');
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subGreeting}>Buenos días</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={require('../assets/notification.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceTitle}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$7,783.00</Text>
        </View>
        <View>
          <Text style={styles.expenseTitle}>Total Expense</Text>
          <Text style={styles.expenseAmount}>-$1.187.40</Text>
        </View>
      </View>

      {/* Tarjetas y cuentas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nombre de usuario</Text>
          <Text style={styles.cardInfo}>IBAN ES12 3456 7890 1234 5678 9012</Text>
          <Text style={styles.cardBalance}>Saldo: 1.405,50 €</Text>
        </View>
      </ScrollView>

      {/* Movimientos */}
      <View style={styles.movementsHeader}>
        <Text style={styles.movementsTitle}>movimientos</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>ver más</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.movementsList}>
        {/* Lista de movimientos (simulada) */}
        <View style={styles.movementItem}>
          <Image source={require('../assets/icon-airbnb.png')} style={styles.movementIcon} />
          <View>
            <Text style={styles.movementTitle}>Airbnb</Text>
            <Text style={styles.movementDate}>18:27 - April 30</Text>
          </View>
          <Text style={styles.movementAmount}>$4.000,00</Text>
        </View>
        <View style={styles.movementItem}>
          <Image source={require('../assets/icon-burger.png')} style={styles.movementIcon} />
          <View>
            <Text style={styles.movementTitle}>Burguer King</Text>
            <Text style={styles.movementDate}>17:00 - April 24</Text>
          </View>
          <Text style={styles.movementAmount}>-$100,00</Text>
        </View>
        <View style={styles.movementItem}>
          <Image source={require('../assets/icon-rent.png')} style={styles.movementIcon} />
          <View>
            <Text style={styles.movementTitle}>Rent</Text>
            <Text style={styles.movementDate}>8:30 - April 15</Text>
          </View>
          <Text style={styles.movementAmount}>-$674,40</Text>
        </View>
      </ScrollView>

      {/* Menú inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Image source={require('../assets/icon-home.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-activity.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChatbotPress}>
          <Image source={require('../assets/icon-galaxy.png')} style={styles.menuIconCenter} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-wallet.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-settings.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subGreeting: {
    color: '#bbb',
    fontSize: 12,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  icon: {
    width: 20,
    height: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  expenseTitle: {
    color: '#ffa94d',
    fontSize: 14,
    textAlign: 'right',
  },
  expenseAmount: {
    color: '#ffa94d',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardsScroll: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    width: 280,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardInfo: {
    color: '#bbb',
    fontSize: 12,
    marginVertical: 4,
  },
  cardBalance: {
    color: '#e54690',
    fontWeight: '600',
  },
  movementsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  movementsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  viewMore: {
    color: '#e54690',
  },
  movementsList: {
    flex: 1,
  },
  movementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  movementIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  movementTitle: {
    color: '#fff',
    fontSize: 14,
  },
  movementDate: {
    color: '#aaa',
    fontSize: 12,
  },
  movementAmount: {
    marginLeft: 'auto',
    color: '#fff',
    fontWeight: '600',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#2c2c2e',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  menuIconCenter: {
    width: 40,
    height: 40,
  },
});
