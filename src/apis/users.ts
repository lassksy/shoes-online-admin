import { $http } from "."

export const getUserlist=(params:{pageSize:string,requestPage:string})=> {
    return $http({
        method: 'GET',
        url: "admin/user/listWithPage",
    })
}