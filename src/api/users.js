import axios from 'axios';

export const signup = async ({ username, password }) => {
	try {
		const res = await axios.post(
			`${import.meta.env.VITE_BACKEND_URL}/user/signup`,
			{ username, password }
		);
		return res.data;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || error.message || 'Signup failed'
		);
	}
};
