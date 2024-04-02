import { httpInstance } from "@/apis";
import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";

export interface UserInfo {
    "avater": string,
    "email": string,
    "gender": number,
    "integration": number,
    "nickname": string,
    "phoneNumber": string,
    "username": string,
}
export const useUserInfoStore=defineStore("userinfo-store" , ()=>{
    const userinfo = ref<UserInfo>();


        const setAuth=(token: string)=> {
            httpInstance.defaults.headers.common.Authorization = token;
            localStorage.setItem("token" ,token);
        };
        const authFromLocal=()=> {
            const token=localStorage.getItem("token");
            if (token) {
                setAuth(token);
                return true;
            }
            return false;
        };
        const removeAuth=()=> {
            delete httpInstance.defaults.headers.common.Authorization;
            localStorage.removeItem("token");
            router.push("/login");
        };

    return {setAuth,
           authFromLocal,
           removeAuth,
    }
})