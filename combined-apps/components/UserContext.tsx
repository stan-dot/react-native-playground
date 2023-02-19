import 'react-native-url-polyfill/auto';
import React, { useEffect, useState, createContext, useContext } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/initSupabase'
import { Alert } from 'react-native';

/** URL polyfill. Required for Supabase queries to work in React Native. */

export const UserContext = createContext<{ user: User | null; session: Session | null }>({
  user: null,
  session: null,
})

// todo update this to version 2.0
export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    console.log('user context use effect');
    // const { data:sessionData, error: sessionError } = await supabase.auth.getSession()
    supabase.auth.getSession().then(({ data, error }) => { 
      console.log('getting the session', data);
      const user: User | null = (data.session && data.session.user) ?? null;
      if (!error && !user) Alert.alert('Check your email for the login link!')
      if (error) Alert.alert(error.message)
      // const session = supabase.auth.session()
      setSession(session)
      setUser(session?.user ?? null)
     });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`)
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      authListener!.subscription.unsubscribe();
      // authListener!.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    session,
    user,
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
