import axios from 'axios'
const ENV       = process.env.BASE_API

class Anaylytic {
    static readyToVerify(req) {
        return axios.put(ENV+  `/abk/verify/${req.id}`, req)
    }
    static postAbk(req) {
        return axios.post(ENV+'/abk', req)
    }
    static deleteAbk(id) {
        return axios.delete(ENV+ `/abk/${id}`)
    }
    static ModifyABK(id, req) {
        return axios.put(ENV + `/abk/modify/${id}`, req)
    }

    static GenerateFormA(opdId) {
        return axios.get(ENV+`/abk/generate/form/a/${opdId}`)
    }
    static GenerateFormB(opdId) {
        return axios.get(ENV+`/abk/generate/form/b/${opdId}`)
    }
    static GenerateFormC(opdId) {
        return axios.get(ENV+`/abk/generate/form/c/${opdId}`)
    }
    static GenerateFormD(opdId) {
        return axios.get(ENV+`/abk/generate/form/d/${opdId}`)
    }
    static GenerateFormE(opdId) {
        return axios.get(ENV+`/abk/generate/form/e/${opdId}`)
    }
    static GetDetail(position_id) {
        return axios.get(ENV+`/abk/detail/${position_id}`)
    }

}

export default Anaylytic