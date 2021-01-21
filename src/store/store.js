import { writable } from 'svelte/store'



function authStore() {
    const { subscribe, set } = writable(getStorageUser())

    return {
        subscribe,
        loginUser: (arg) => set(arg),
        logoutUser: () => set(null)
    }
}

export function setStorageUser(user) {
    try {
        localStorage.setItem('auth', JSON.stringify(user))
    } catch (error) {
        console.log(error);
    }
}

function getStorageUser() {
    return localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
}

export let authlogin = authStore()