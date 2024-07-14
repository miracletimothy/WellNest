import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:5000/api',
});

axiosInstance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers['x-auth-token'] = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
