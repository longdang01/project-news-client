import http from "../http-common";

const get = () => {
  return http.get(`/posts`);
};

const search = (data) => {
  return http.post(`/posts/search`, data);
};

const getByPath = (data) => {
  return http.post(`/posts/getByPath`, data);
};

const getById = (id) => {
  return http.get(`/posts/${id}`);
};

const create = (data) => {
  return http.post(`/posts`, data);
};

const update = (id, data) => {
  return http.put(`/posts/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/posts/${id}`);
};

const PostService = {
  get,
  search,
  getByPath,
  getById,
  create,
  update,
  remove,
};

export default PostService;
