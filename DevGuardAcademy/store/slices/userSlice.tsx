import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set user information upon login
    setUser: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string }>,
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },

    // Clear user information upon logout
    clearUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    },

    // Update user name
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    // Update user email
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    // Toggle user login status
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const {
  setUser,
  clearUser,
  updateName,
  updateEmail,
  toggleLogin,
} = userSlice.actions;

export default userSlice.reducer;
