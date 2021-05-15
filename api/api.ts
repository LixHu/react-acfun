// 声明API配置及调用规则,目前声明简易调用，后期封装好各个调用的规则
import axios, {AxiosInstance, AxiosResponse} from "axios";

interface ApiInterface {
    api: string;
    header: object;
}

interface paramsInterface {
    url: string,
    data?: Array<any> | object
}

class Api {
    private axios: AxiosInstance

    constructor(props: ApiInterface) {
        this.axios = this.createApi(props)
    }

    createApi(props: ApiInterface) : AxiosInstance{
         return axios.create({
            baseURL: props.api,
            timeout: 2000,
            headers: props.header
        });
    }

    getRequest(params: paramsInterface) : Promise<AxiosResponse> {
        return this.axios.get(params.url);
    }

    postRequest(params: paramsInterface) : Promise<AxiosResponse> {
        return this.axios.post(params.url, params.data)
    }

    deleteRequest(params: paramsInterface) :Promise<AxiosResponse> {
        return this.axios.delete(params.url)
    }

    patchRequest(params: paramsInterface): Promise<AxiosResponse> {
        return this.axios.patch(params.url, params.data)
    }

    putRequest(params: paramsInterface) : Promise<AxiosResponse> {
        return this.axios.put(params.url, params.data)
    }
}


export default Api;