import axios from "axios";

const serverUrl = "https://jsonplaceholder.typicode.com";
export const getPosts = (start) => {
  const url = `${serverUrl}/posts?_start=${start}&_limit=2`;
  return axios.get(url);
};

export const getPhotos = () => {
  const url = `${serverUrl}/photos`;
  return axios.get(url);
};
export const getComments = () => {
  const url = `${serverUrl}/comments`;
  return axios.get(url);
};
export const getPost = (postId) => {
  const url = `${serverUrl}/posts?id=${postId}`;
  return axios.get(url);
};
export const getPhoto = (postId) => {
  const url = `${serverUrl}/photos?id=${postId}`;
  return axios.get(url);
};

// export const getCommentsById=(postId)=>{
//   const url  = `${serverUrl}/comments/${postId}`
//   return axios.get(url)
// }
