import axios, { AxiosError } from "axios";

const API_URL = "https://practice-website-backend.onrender.com/api/auth";

export const signupUser = async (user: { name: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, user);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response && err.response.data) {
            return err.response.data;
        }
        throw err;
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response && err.response.data) {
            return err.response.data;
        }
        throw err;
    }
};


