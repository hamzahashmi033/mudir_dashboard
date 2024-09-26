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
  async (project, { dispatch }) => {
    const response = await axios.post(
      `${API_URL}project/create/hamzahashmi@gmail.com`,
      project
    );
    dispatch(fetchProjects()); 
    return response.data;
  }
);

export const updateExistigProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, project }, { dispatch }) => {
    
    
    const response = await axios.put(`${API_URL}project/update/${id}/hamzahashmi@gmail.com`, project);
    dispatch(fetchProjects()); 
    return response.data;
  }
);


export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id, { dispatch }) => {
    await axios.delete(`${API_URL}project/delete/${id}/hamzahashmi@gmail.com`);
    dispatch(fetchProjects()); 
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
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProject.fulfilled, (state) => {
        state.status = "succeeded";
        state.message = "Project created successfully!";
      })
      .addCase(updateExistigProject.fulfilled, (state) => {
        state.status = "succeeded";
        state.message = "Project updated successfully!";
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.status = "succeeded";
        state.message = "Project deleted successfully!";
      });
  },
});

export default projectSlice.reducer;
