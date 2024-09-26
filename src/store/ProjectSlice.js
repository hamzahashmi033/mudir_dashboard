import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://dashboard.thehashmi.online/";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get(
      `${API_URL}project/all-projects/hamzahashmi@gmail.com`
    );
    return response.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (project) => {
    const response = await axios.post(
      `${API_URL}project/create/hamzahashmi@gmail.com`,
      project
    );
    return response.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, project }) => {
    const response = await axios.put(`${API_URL}/${id}`, project);
    return response.data;
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    message: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const index = state.projects.findIndex(
          (project) => project.id === action.payload.id
        );
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload
        );
      });
  },
});

export default projectSlice.reducer;
