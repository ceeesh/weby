import axios from 'axios';

const BASED_URL = 'http://localhost:3000/api/v1/'

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

export const imageUpload = async (token, data) => {
    return await axios.post(`${BASED_URL}clients/${data.id}`, data, { headers: token })
}

// /api/v1/clients/:id

// export const updateCommission = async (headers, data) => {
//     return await axios.patch(`${url}/commissions/${data.id}`, data , {headers: headers})
//   }
