// 公共调用api文件

import User from "./User";
import Api from "./api";
let apiUrl = '/'
const headers = {};
class apiHelper {
    private user: User;
    constructor() {
        const api = new Api({ api: apiUrl, header: headers});
        this.user = new User(api);
    }
}

export default apiHelper