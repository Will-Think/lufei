import Axios from 'axios'
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1'
export function categoryList(url) {
    return Axios.get(url).then(res => res.data)
}