// 公共调用api文件

import User from "./User";
import Api from "./api";
let apiUrl = '/'
const headers = {};
export default class apiHelper {
    public user: User;
    public api: Api;
    constructor() {
        this.api = new Api({ api: apiUrl, header: headers});
        this.user = new User(this.api);
    }
}