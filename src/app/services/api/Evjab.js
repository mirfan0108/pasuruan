const ENV       = process.env.BASE_API
import axios    from 'axios'

class Evjab {

    static getAll(id) {
        return axios.get(ENV+`/evjab/opd/${id}`)
    }

    static Create(req) {
        return axios.post(ENV+`/evjab/create`, req)
    }

}

export default Evjab