import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './components/Auth';
import { UserContextProvider, useUser } from './components/UserContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { supabase } from './lib/initSupabase';
import Navigation from './navigation';


const Container = () => {
  const { user } = useUser()
  const colorScheme = useColorScheme();
  console.log('in the container');

  return <Navigation colorScheme={colorScheme} />
  return user ?
    <Navigation colorScheme={colorScheme} />
    : <Auth />
}

export default function App() {
  const isLoadingComplete = useCachedResources();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
})

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
