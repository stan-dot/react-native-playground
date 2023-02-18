import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './components/Auth';
import TodoList from './components/TodoList';
import { UserContextProvider, useUser } from './components/UserContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const Container = () => {
  const { user } = useUser()
  console.log('in the container');

  return user ? <TodoList /> : <Auth />
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContextProvider>
        <SafeAreaProvider>
          <Text h1>Todo List</Text>
          {/* <Navigation colorScheme={colorScheme} /> */}
          <Container />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </UserContextProvider >
    );
  }
}
