import { $http } from ".";

//获取用户信息

export const getUserinfoApi = () =>  {
    return $http({
        method: "GET",
        url: "/user/info",
    });
};