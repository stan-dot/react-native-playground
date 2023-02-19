import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Styles } from '../lib/constants'
import { supabase } from '../lib/initSupabase'

import { Button, Input } from 'react-native-elements'
import { AuthResponse, OAuthResponse, User } from '@supabase/supabase-js'
// todo get from this https://tailwindcomponents.com/component/twitter-login

type LoginTypes = 'none'|  'email' | 'signup' | 'github' | 'twitter';


async function getAuthResponse(type: LoginTypes, email: string, password: string):Promise<AuthResponse | OAuthResponse>   {
  if (type === 'email') {
    return await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    }); 
  }

  if (type === 'signup') {
    return await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    });

   }
 

  if (type === 'github') {
   return  await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: "https://tqesyutadabvauogvnpc.supabase.co/auth/v1/callback"
      }
    });
     }

  if (type === 'twitter') {
     return await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: "https://tqesyutadabvauogvnpc.supabase.co/auth/v1/callback"
      }
    });
     }

  throw Error('unknown login typ');
}



export default function Auth() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<LoginTypes>('none')

  const handleLogin = async (type: LoginTypes, email: string, password: string) => {
    setLoading(type)
    const { data, error:authError } = await getAuthResponse(type, email, password);
    if (!authError) Alert.alert('Check your email for the login link!')
    if (authError) Alert.alert(authError.message)
    console.log(data);
    // todo possibly the user context will auto-update
    // const firstUser: User = data.user;

    setLoading('none');
  }
  console.log('rendering auth');

  return (
    <View>
      <View style={[styles.verticallySpaced, { marginTop: 20 }]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, { marginTop: 20 }]}>
        <Button
          title="Sign in"
          disabled={!!loading.length}
          loading={loading === 'email'}
          onPress={() => handleLogin('email', email, password)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={!!loading.length}
          loading={loading === 'signup'}
          onPress={() => handleLogin('signup', email, password)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="with github"
          disabled={!!loading.length}
          loading={loading === 'github'}
          onPress={() => handleLogin('github', email, password)}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button
          title="with twitter"
          disabled={!!loading.length}
          loading={loading === 'twitter'}
          onPress={() => handleLogin('twitter', email, password)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: Styles.spacing,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
})
