import axios from "axios"

const baseApi = axios.create({

    baseURL: "https://api.themoviedb.org/3"
})

const CRUDRequests = {
    get: async(url) => {
        return await baseApi.get(url, {})
    },
    post: async(url) => {
        return baseApi.post(url, {}, {})
    },
    delete: async(url) => {
        return baseApi.delete(url, {}, {})
    },
    put: async(url) => {
        return baseApi.put(url, {}, {})
    },
}

export default CRUDRequests;