import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5173'
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const fetchAllProduct = () => {
  return instance.get("/api/v1/products");
};

const fetchImg = async (id) => {
  const imageBlob = await instance.get(`api/v1/image/${id}`, {
    responseType: "blob",
  });

  // return imageBlob.data;

  return URL.createObjectURL(imageBlob.data);
};

const loginApi = (username, password) => {
  return instance.post("/api/v1/login", {
    user_name: username,
    password: password,
  });
};

export { fetchAllProduct, fetchImg, loginApi };
