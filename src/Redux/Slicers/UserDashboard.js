import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  donationUser: [],
  projectUser: [],
};
export const getProject = createAsyncThunk(
  "userDashboard/getProject",
  async () => {
    axios.interceptors.request.use((req) => {
      const token = localStorage.getItem("value");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });
    const res = await axios.get(`/user/projects`);
    return res.data;
  }
);



export const getDonations = createAsyncThunk(
  "userDashboard/donations",
  async () => {
    axios.interceptors.request.use((req) => {
      const token = localStorage.getItem("value");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });
    const res = await axios.get(`/user/donations`);
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "userDashboard/donations",
  async (data) => {
    axios.interceptors.request.use((req) => {
      const token = localStorage.getItem("value");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });
    const res = await axios.put(`/users`, data);
    return res.data;
  }
);

export const uploadImage = createAsyncThunk("user/imageUser", async (info) => {
  axios.interceptors.request.use((req) => {
    const token = localStorage.getItem("value");
    req.headers.authorization = `Bearer ${token}`;
    return req;
  });
  console.log(info);
  const res = await axios.put("/imageUser", {user_image: info});
  return res.data;
});

const userDashboardSlicer = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getProject.fulfilled, (state, action) => {
        console.log("projects", action.payload)
        state.projectUser = action.payload;
      })

      .addCase(getDonations.fulfilled, (state, action) => {
        console.log(action.payload)
        state.donationUser = action.payload;
      })

      .addCase(uploadImage.fulfilled, (state, action) => {
        console.log(action.payload)
      })

     
  },
});

export default userDashboardSlicer.reducer;
