import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aeiqiklbjizaofbnqpbf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaXFpa2xiaml6YW9mYm5xcGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU1NDA0MDQsImV4cCI6MTk5MTExNjQwNH0.WEyouvQoFO8oJ849q1azx1XSF2H9lfipHgfnJ6WW08w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})