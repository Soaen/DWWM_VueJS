import { $fetch } from 'ohmyfetch';

const urlAPI = "https://zoonder.grimille.fr/"

const api = $fetch.create({
    baseURL: urlAPI,
})

export const getBaseUrl =  () => {
    return urlAPI;
}

export const getAnimals = async() => {
    return api("/api/profiles", {method: "GET"})
}

export const getRandomAnimal = async() => {
    return api("/api/profiles/random", {method: "GET"})
}

export const getCrushsAnimals = async() => {
    return api("/api/crushs", {method: "GET"})
}

export const askMatch = async(id) => {
    return api(`/api/match`, {method: "POST", body: {id}})
}

export const createAccount = async(username, password) => {
    return api(`/auth/login`, {method: "POST", body: username, password})
}