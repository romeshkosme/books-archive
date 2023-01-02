import axios from "axios";

const INSTANCE = axios.create({
	baseURL: import.meta.env.VITE_NYC_URL,
});

export default INSTANCE;