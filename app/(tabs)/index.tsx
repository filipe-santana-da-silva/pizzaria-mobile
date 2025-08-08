
import { Text, StyleSheet, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/src/routes';
import { AuthProvider } from '@/src/contents/AuthContext';

export default function HomeScreen() {
  return (
    <>
      <AuthProvider>
        <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false}/>
        <Routes/>
      </AuthProvider>
      
    </>
  );
}

