import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7e8283fb-89d8-4c74-ad80-b7366c282673'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postUsers(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

