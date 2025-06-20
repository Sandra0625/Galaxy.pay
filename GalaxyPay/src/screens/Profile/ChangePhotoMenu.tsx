import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePhotoMenu = ({ onSelectOption }: { onSelectOption: (option: string) => void }) => {
  const options = ['Añadir avatar', 'Tomar foto', 'Seleccionar foto', 'Crear con la IA'];

  return (
    <View style={styles.menu}>
      {options.map((option) => (
        <TouchableOpacity key={option} onPress={() => onSelectOption(option)}>
          <Text style={styles.option}>› {option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#ff5f7e',
    borderRadius: 20,
    padding: 16,
    position: 'absolute',
    top: 150,
    right: 20,
    width: 200,
    elevation: 5,
  },
  option: {
    color: '#fff',
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default ChangePhotoMenu;
