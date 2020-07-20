const ENV       = process.env.BASE_API
import axios    from 'axios'

class Evjab {

    static getAll(id) {
        return axios.get(ENV+`/evjab/opd/${id}`)
    }

    static Create(req) {
        return axios.post(ENV+`/evjab/create`, req)
    }

    static CreateFungsional(req) {
        return axios.post(ENV+`/evjab/create/fungsional`, req)
    }

    static GetLampiran(id) {
        return axios.get(`${ENV}/evjab/lampiran/opd/${id}`)
    }

    static GetInput_infoFak(id) {
        return axios.get(`${ENV}/evjab/info-faktur/input/position/${id}`)
    }

    static CreateInput_infoFak(req) {
        return axios.post(`${ENV}/evjab/info-faktur`, req)
    }

}

export default Evjab