import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { ElLoading, ElMessage } from "element-plus";
export const httpInstance = axios.create();


export type BkResponse = {
    data: any;
    code: number;
    message: string;
    succeed: true;
};
//设置请求根目录
httpInstance.defaults.baseURL = import.meta.env.VITE_BASEURL;

//配置响应拦截器
export const $http = async(config: AxiosRequestConfig) =>  {
    const loadingInstance =  ElLoading.service();

    try {
        const axiosResponse = await httpInstance<BkResponse>(config);
        const bkResponse = axiosResponse.data

        if(!bkResponse?.succeed) {
            let errTitle: string='Error';
            if(bkResponse.code === 401) {
                errTitle = "Unauthorized"
                ElMessage.error('未授权')
                //...
            } else if(bkResponse.code===403) {
                errTitle = 'Forbidden' ;
            } else if(bkResponse.code === 9999) {
                errTitle = '9999Error';
            } else {
                errTitle = 'Unknown'
            }
            const err= new Error(bkResponse?.message || 'Unknown');
            err.name = errTitle
            throw err;
        }
        return bkResponse;
    } catch (err) {
        if (err instanceof AxiosError) {
            ElMessage.error("网络错误");
        } 
        throw err;
    } finally {
        loadingInstance.close()
    }
}