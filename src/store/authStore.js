import { create } from 'zustand';

const useAuthStore = create((set) => ({
    // Problem - user:null means no user is logged in initally - whenever we refresh the page the state will be null always
    // Solution - Get information from the localStorage if the user is already logged in
    user: JSON.parse(localStorage.getItem("user-info")),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
}))

export default useAuthStore