import {api} from "../axios";

export default function loginApi (data) {
    return api.post('sessions', {...data, site_key: "no01"});
}
