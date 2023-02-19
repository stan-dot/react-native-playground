import { supabase } from '../lib/initSupabase';
import { AuthResponse, OAuthResponse } from '@supabase/supabase-js';

// todo get from this https://tailwindcomponents.com/component/twitter-login
export type LoginTypes = 'none' | 'email' | 'signup' | 'github' | 'twitter';
// async function signInWithEmail() {
//   const { data, error } = await supabase.auth.signInWithOtp({
//     email: 'example@email.com',
//     options: {
//       emailRedirectTo: 'https://example.com/welcome',
//     },
//   })
// }
export async function getAuthResponse(type: LoginTypes, email: string, password: string): Promise<AuthResponse | OAuthResponse> {
  if (type === 'email') {
    console.log(window.localStorage);
    // return await supabase.auth.signInWithPassword({ email, password }); 
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (data.session)
      supabase.auth.setSession(data.session);
    // return { data, error };
  }

  if (type === 'signup') {
    return await supabase.auth.signUp({ email, password });
  }

  if (type === 'github') {
    return await supabase.auth.signInWithOAuth({
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
