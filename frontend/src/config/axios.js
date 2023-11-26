import axios from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_PATH,
	timeout: 1000,
});

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;
