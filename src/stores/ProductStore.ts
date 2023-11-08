import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore', {
    // state
    state: () => {
        return {
            data: "HelloWorld",
            status: true
        }
    }

    // actions

    // getters
})  