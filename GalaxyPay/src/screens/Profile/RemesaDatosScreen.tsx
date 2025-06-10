@@ -0,0 +1,200 @@
// Importación de librerías y componentes necesarios
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

// Componente principal de la pantalla de datos de remesa
export default function RemesaDatosScreen() {
  // Declaración de estados para almacenar los datos ingresados por el usuario
  const [amount, setAmount] = useState('');
  const [pais, setPais] = useState('');
  const [moneda, setMoneda] = useState('');
  const [tipo, setTipo] = useState('');
  const [origen, setOrigen] = useState('');

  return (
    // Contenedor desplazable para permitir scroll en dispositivos pequeños
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Datos de la remesa</Text>

      {/* Tarjeta contenedora de toda la información */}
      <View style={styles.card}>
        <View style={styles.receiverInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text> {/* Iniciales del receptor */}
          </View>
          <View style={styles.receiverText}>
            <Text style={styles.receiverName}>Alicia Moratón Bautista</Text>
            <Text style={styles.receiverCountry}>Nicaragua 🇳🇮</Text>
          </View>
        </View>

        {/* Campo para ingresar el monto a enviar */}
        <TextInput
          style={styles.input}
          placeholder="Monto a enviar"
          placeholderTextColor="#aaa"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric" // Solo permite números
        />

        {/* Selector de país */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={pais}
            onValueChange={(itemValue) => setPais(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="País" value="" />
            <Picker.Item label="Colombia" value="colombia" />
            <Picker.Item label="Perú" value="peru" />
            <Picker.Item label="México" value="mexico" />
          </Picker>
        </View>

        {/* Selector de moneda */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={moneda}
            onValueChange={(itemValue) => setMoneda(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Moneda" value="" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="COP" value="cop" />
            <Picker.Item label="MXN" value="mxn" />
          </Picker>
        </View>

        {/* Selector del tipo de remesa */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Tipo de remesa" value="" />
            <Picker.Item label="Cuenta bancaria" value="cuenta" />
            <Picker.Item label="Efectivo" value="efectivo" />
          </Picker>
        </View>

        {/* Selector del origen del dinero */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={origen}
            onValueChange={(itemValue) => setOrigen(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Origen del dinero" value="" />
            <Picker.Item label="Salario" value="salario" />
            <Picker.Item label="Ahorros" value="ahorros" />
            <Picker.Item label="Otros" value="otros" />
          </Picker>
        </View>

        {/* Resumen estático de la transacción */}
        <View style={styles.transactionSummary}>
          <Text style={styles.summaryText}>País: Colombia</Text>
          <Text style={styles.summaryText}>Moneda: COP</Text>
          <Text style={styles.summaryText}>Tarifa: 4.000 COP</Text>
          <Text style={styles.summaryText}>Tasa: 1 USD = 4.170 COP</Text>
          <Text style={styles.summaryText}>Tiempo estimado: 3 días</Text>
        </View>
      </View>

      {/* Botón para continuar con el proceso */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos utilizados en la interfaz
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
  },
  receiverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: '#e7458f',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  receiverText: {
    flex: 1,
  },
  receiverName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  receiverCountry: {
    color: '#aaa',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    color: '#fff',
    paddingHorizontal: 10,
  },
  transactionSummary: {
    marginTop: 16,
  },
  summaryText: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 4,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});