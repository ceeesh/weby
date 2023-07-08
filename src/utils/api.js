import axios from 'axios';
// http://localhost:3000/api/v1/
const BASED_URL = 'https://weby-api.onrender.com/api/v1/'

export const registerAcc = async ({ email, password, password_confirmation, first_name, last_name, birthday, gender, phone_number, country }) => {
    return await axios.post(`${BASED_URL}signup`, { email, password, password_confirmation, first_name, last_name, birthday, gender, phone_number, country })
}

export const logIn = async ({ email, password }) => {
    return await axios.post(`${BASED_URL}signin`, { email, password })
}

export const createProject = async (data, token) => {
    return await axios.post(`${BASED_URL}projects`, data, { headers: token })
}

export const getAllProjects = async (token) => {
    return await axios.get(`${BASED_URL}projects`, { headers: token })
}

export const getAllBookings = async (token) => {
    return await axios.get(`${BASED_URL}bookings`, { headers: token })
}

export const imageUpload = async (data, id, token) => {
    return await axios.patch(`${BASED_URL}client/${id}`, data, { headers: token })
}

export const updateClientInfo = async (data, id, token) => {
    return await axios.patch(`${BASED_URL}client/${id}`, data, { headers: token })
}

