import Api from "../api";
import {AxiosResponse} from "axios";

class User {
    private api;
    constructor(api: Api) {
        this.api = api
    }

    getUser() : Promise<AxiosResponse> {
        return this.api.getRequest({ url: '/'});
    }
}

export default User;