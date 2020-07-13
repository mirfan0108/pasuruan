import MasterPower from '../../api/MasterPower'

export default {
    getPowers({ commit, state }, opt) {
        let responseData
        state.onLoad = true
        return new Promise((resolve, reject) => {
            try {
                MasterPower.getPower(opt.page, opt.limit, opt.search)
                .then(_resp => {
                    if(_resp.data && _resp.data.content.length > 0) {
                        responseData = _resp.data
                        state.Powers = _resp.data.content
                        state.totalPowers = _resp.data.total
                    } else {
                        state.Powers = []
                        state.totalPowers = 0
                    }
                })
                .finally(() => {
                    setTimeout(() => {
                        state.onLoad = false
                    }, 500)
                    if(responseData) {
                        resolve(responseData)
                    } else {
                        reject(responseData)
                    }
                })
            } catch (error) {
                this.error_msg = error.message
                reject(error.message)
            }
        })
    },

    addPowers({commit, state}, form) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterPower.addPower(form)
                .then(_resp => {
                    responseData = _resp.data
                })
                .finally(() => {
                    setTimeout(() => {
                        state.onLoad = true
                    }, 500)
                    if(responseData) {
                        resolve(responseData)
                    } else {
                        reject(responseData)
                    }
                })
            } catch (error) {
                this.error_msg = error.message
                reject(error.message)
            }
        })
    },

    modifyPower({commit, state}, req) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterPower.modifyPower(req.id, req.form)
                .then(_resp => {
                    responseData = _resp.data
                })
                .finally(() => {
                    setTimeout(() => {
                        state.onLoad = true
                    }, 500)
                    if(responseData) {
                        resolve(responseData)
                    } else {
                        reject(responseData)
                    }
                })
            } catch (error) {
                this.error_msg = error.message
                reject(error.message)
            }
        })
    },

    deletePower({commit, state}, id) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterPower.deletePower(id)
                .then(_resp => {
                    responseData = _resp.data
                })
                .finally(() => {
                    setTimeout(() => {
                        state.onLoad = true
                    }, 500)
                    if(responseData) {
                        resolve(responseData)
                    } else {
                        reject(responseData)
                    }
                })
            } catch (error) {
                this.error_msg = error.message
                reject(error.message)
            }
        })
    }
}