import API from "./api";
const API_URL = import.meta.env.VITE_BASE_URL;

export const signupUser = async (user) => {
  try {
    const response = await API.post(`${API_URL}/auth/register`, user);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await API.post(`${API_URL}/auth/login`, user);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const logoutUser = async (user) => {
  try {
    const response = await API.put(`${API_URL}/logout`, user);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const uploadFile = async (data) => {
  try {
    const response = await API.post(`${API_URL}/file/upload`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const addComment = async (comment) => {
  try {
    const response = await API.post(`${API_URL}/comment`, comment);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getComments = async (id) => {
  try {
    const response = await API.get(`${API_URL}/comment/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteComments = async (id) => {
  try {
    const response = await API.get(`${API_URL}/comment/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const savePost = async (post) => {
  try {
    const response = await API.post(`${API_URL}/post`, post);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const updatePost = async (post, id) => {
  try {
    const response = await API.put(`${API_URL}/post/id`, post);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await API.delete(`${API_URL}/post/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllPost = async (category) => {
  console.log(category, "---category");
  try {
    const response = await API.get(`${API_URL}/post`, {
      params: { category: category },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getpostdetail = async (id) => {
  try {
    const response = await API.get(`${API_URL}/post/detail/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
