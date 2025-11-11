import { createSlice } from "@reduxjs/toolkit";
import { dummyUsers } from "../assets/dummyUsers";
import { useSelector } from "react-redux";

//  mock up initail State
// const initialState = {
//   uid: "iS3jNWLA4uU8vq0FCN5oceKGepj1",
//   email: "admin@harvesthub.com",
//   user: {
//     name: "Mohamed",
//     image: `${import.meta.env.BASE_URL}users/admin.jpg`,
//     phone: "0100-888-4444",
//     location: "Alexandria, Egypt",
//     role: "admin",
//     bio: "Tech enthusiast and platform manager. I keep Harvest Hub running smoothly and securely for everyone.",
//   },
//   token: "don't care just mockup",
//   isAuthenticated: true,
// };

const initialState = {
  uid: null,
  email: null,
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, email, accessToken } = action.payload;
      const user = dummyUsers.find((user) => user.uid === uid);

      state.uid = uid;
      state.email = email;
      state.user = user;
      state.token = accessToken;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export function useAuth() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return { isAuthenticated, user };
}

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
