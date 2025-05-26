import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function FaceRecognitionScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const cameraRef = useRef<Camera>(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takeSelfie = async () => {
    if (cameraRef.current && isCameraReady) {
      try {
        setIsSaving(true);
        const photo = await cameraRef.current.takePictureAsync({ base64: true });
        await AsyncStorage.setItem('selfieUri', photo.uri);
        Alert.alert('¡Listo!', 'Selfi guardada correctamente.');
        navigation.goBack(); // Vuelve a la pantalla anterior
      } catch (error) {
        Alert.alert('Error', 'No se pudo guardar la selfi.');
      } finally {
        setIsSaving(false);
      }
    }
  };

  if (hasPermission === null) {
    return <View style={styles.loadingContainer}><Text>Solicitando permiso de cámara...</Text></View>;
  }

  if (hasPermission === false) {
    return <View style={styles.loadingContainer}><Text>No se puede acceder a la cámara.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={CameraType.front}
        ref={cameraRef}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={takeSelfie} style={styles.captureButton} disabled={isSaving}>
          {isSaving ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Ionicons name="camera" size={40} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  captureButton: {
    backgroundColor: '#4c3b90',
    borderRadius: 50,
    padding: 18,
  },
});
