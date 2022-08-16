import axios from 'axios';
import config from '../config.json';
import Cookies from 'js-cookie';

const qBitApi = axios.create();

const AxiosService = {
    setUp: function (origin) {
        qBitApi.defaults.headers.common['Content-Type'] = 'x-www-form-urlencoded';

        if (config.developmentMode) {
            qBitApi.defaults.baseURL = `${config.developmentApi}/api/v2/`;
            return;
        }

        qBitApi.defaults.baseURL = `${origin}/api/v2/`;
    },
    Login: async function (info) {
        try {
            const params = new URLSearchParams();
            params.append('username', info.username);
            params.append('password', info.password);

            const response = await qBitApi.post(`auth/login`, params);
            console.log(response);

            Cookies.set("QBIT-LOGIN", "true");

            return response;
        } catch (error) {
            console.error(error);
        }
    },
    Logout: async function () {
        try {
            const response = await qBitApi.post(`auth/logout`);
            console.log(response);

            Cookies.remove("QBIT-LOGIN");
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export default AxiosService;