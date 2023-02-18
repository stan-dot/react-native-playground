import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './components/Auth';
import { UserContextProvider, useUser } from './components/UserContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


const Container = () => {
  const { user } = useUser()
  const colorScheme = useColorScheme();
  console.log('in the container');

  // return <Navigation colorScheme={colorScheme} />
  return user ? <Navigation colorScheme={colorScheme} /> : <Auth/>
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContextProvider>
      <SafeAreaProvider>
        <Container />
        <StatusBar style="auto" />
      </SafeAreaProvider>
 </UserContextProvider >
    );
  }
}
