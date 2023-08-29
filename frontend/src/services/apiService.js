import axios from "axios";
import { getAccessToken } from "../utils/common-utils";
// import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constant/config.js";
const API_URL = "http://localhost:5000";

// const axiosInstance = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
//   headers: {
//     "content-type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     //stop the loader here
//     return processResponse(response);
//   },
//   function (error) {
//     return Promise.reject(processError(error));
//   }
// );

// ///////
// //if success -> returs {isSuccess:true,data:object}
// //if fail -> return {isSailure: true, status,msg:string, code:int}
// /////

// const processResponse = (response) => {
//   if (response.status === 200) {
//     return { isSuccess: true, data: response.data };
//   } else {
//     return {
//       isFailure: true,
//       status: response.status,
//       msg: response.msg,
//       code: response.code,
//     };
//   }
// };

// const processError = (error) => {
//   if (error.response) {
//     console.log("error in sresponse");
//     //Request made and server responded with status code other than 200
//     return {
//       isError: true,
//       mag: API_NOTIFICATION_MESSAGES.responseFailure,
//       code: error.response.status,
//     };
//   } else if (error.request) {
//     console.log("error in request");
//     //request made but response not come
//     //frontend not connected with backend properly
//     return {
//       isError: true,
//       mag: API_NOTIFICATION_MESSAGES.requestFailure,
//       code: "",
//     };
//   } else {
//     console.log("error in network");
//     //something happen with frontend
//     return {
//       isError: true,
//       mag: API_NOTIFICATION_MESSAGES.networkError,
//       code: "",
//     };
//   }
// };

// const API = {};

// for (const { key, value } of Object.entries(SERVICE_URLS)) {
//   API[key] = (body, showUploadProgress, showDownloadProgress) =>
//     axiosInstance({
//       method: value.method,
//       url: value.url,
//       data: body,
//       responseType: value.responseType,
//       onUploadProgress: function (progressEvent) {
//         if (showUploadProgress) {
//           let percentagecompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           showUploadProgress(percentagecompleted);
//         }
//       },
//       onDownloadProgress: function (progressEvent) {
//         if (showDownloadProgress) {
//           let percentagecompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           showDownloadProgress(percentagecompleted);
//         }
//       },
//     });
// }

// export { API };

// postData = async (e) => {
//   e.preventDefault();
//   var data = {
//     id: 1,
//     name: "rohith",
//   };
//   try {
//     await instance({
//       // url of the api endpoint (can be changed)
//       url: "profile-create/",
//       method: "POST",
//       data: data,
//     }).then((res) => {
//       // handle success
//       console.log(res);
//     });
//   } catch (e) {
//     // handle error
//     console.error(e);
//   }
// };

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    "content-type": "application/json",
    timeout: 10000,
  },
  // .. other options
});

export default instance;

export const signupUser = async (user) => {
  return await axios.post(`${API_URL}/signup`, user);
};

export const loginUser = async (user) => {
  return await axios.post(`${API_URL}/login`, user);
};

export const logoutUser = async (user) => {
  const token = getAccessToken();
  console.log("logout the user");
  const auth = {
    headers: { Authorization: token },
  };
  return await axios.put(`${API_URL}/logout`, user, auth);
};

export const uploadFile = async (data) => {
  return await axios.post(`${API_URL}/file/upload`, data);
};

export const savePost = async (post) => {
  const token = getAccessToken();
  // console.log(token);
  const auth = {
    headers: { Authorization: token },
  };
  // console.log(auth.Authorization);
  return await axios.post(`${API_URL}/create`, post, auth);
};

export const addComment = async (comment) => {
  const token = getAccessToken();
  const auth = {
    headers: { Authorization: token },
  };
  return await axios.post(`${API_URL}/comments/new`, comment, auth);
};

export const getComments = async (params) => {
  const token = getAccessToken();
  const auth = {
    params: params,
    headers: { Authorization: token },
  };
  return await axios.get(`${API_URL}/comments`, auth);
};

export const deleteComments = async (params) => {
  const token = getAccessToken();
  const auth = {
    params: { id: params },
    headers: { Authorization: token },
  };
  return await axios.get(`${API_URL}/comments/delete`, auth);
};

export const updatePost = async (post, params) => {
  // console.log(params);
  const token = getAccessToken();
  const auth = {
    params: params,
    headers: { Authorization: token },
  };
  // console.log(auth);
  return await axios.put(`${API_URL}/update`, post, auth);
};

export const deletePost = async (params) => {
  console.log("deleting a post");
  // console.log(params);
  const token = getAccessToken();
  const auth = {
    params: params,
    headers: { Authorization: token },
  };
  // console.log(auth);
  return await axios.delete(`${API_URL}/delete`, auth);
};

export const getAllPost = async (params) => {
  // console.log(params);
  // console.log("getting posts");
  const token = getAccessToken();

  const headers = { Authorization: token };

  return await axios.get(`${API_URL}/posts`, {
    params: params,
    headers: headers,
  });
};

export const getpostdetail = async (params) => {
  console.log("getting detail");
  const token = getAccessToken();
  const headers = { Authorization: token };
  return await axios.get(`${API_URL}/postdetail`, {
    params: params,
    headers: headers,
  });
};
