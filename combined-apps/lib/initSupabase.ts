import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './constants'

// todo that might need to change
const options: SupabaseClientOptions<'public'> = {
  auth: {
    storage: AsyncStorage,
      autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
};
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, options);
console.log('inited supabase', supabase);

export async function signout() {
    const { error } = await supabase.auth.signOut()

    }