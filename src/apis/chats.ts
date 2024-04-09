import { $http } from ".";

//获取图表数据

export const getMarketingApi = () =>  {
    return $http({
        method: "GET",
        url: "/admin/stat/marketing",
    });
};