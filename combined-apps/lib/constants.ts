if (!process.env.SUPABASE_URL) {
  console.log('constants.ts', 'Make sure you have a `.env` file to populate your variables.')
}

// todo here I cancelled the m at the end
export const SUPABASE_URL = process.env.REACT_NATIVE_SUPABASE_URL || "https://tqesyutadabvauogvnpc.supabase.co";
export const SUPABASE_ANON_KEY = process.env.REACT_NATIVE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZXN5dXRhZGFidmF1b2d2bnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MTgyNDAsImV4cCI6MTk4NDA5NDI0MH0.dAWu0zaC2IP8fWamdlv2DslrkSfWQ4BQTovq443okMA";

// REACT_NATIVE_SUPABASE_URL=https://tqesyutadabvauogvnpc.supabase.com
// REACT_NATIVE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZXN5dXRhZGFidmF1b2d2bnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MTgyNDAsImV4cCI6MTk4NDA5NDI0MH0.dAWu0zaC2IP8fWamdlv2DslrkSfWQ4BQTovq443okMA

export const Styles = {
  fontNormal: 20,
  fontMedium: 28,
  fontLarge: 34,
  fontExtraLarge: 40,
  colorPrimary: 'black',
  spacing: 12,
}
