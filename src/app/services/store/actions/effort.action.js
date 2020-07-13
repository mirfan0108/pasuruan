import MasterEffort from '../../api/MasterEffort'

export default {
    getEfforts({ commit, state }, opt) {
        let responseData
        state.onLoad = true
        return new Promise((resolve, reject) => {
            try {
                MasterEffort.getEffort(opt.page, opt.limit, opt.search)
                .then(_resp => {
                    if(_resp.data && _resp.data.content.length > 0) {
                        responseData = _resp.data
                        state.Efforts = _resp.data.content
                        state.totalEfforts = _resp.data.total
                    } else {
                        state.Efforts = []
                        state.totalEfforts = 0
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

    addEfforts({commit, state}, form) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEffort.addEffort(form)
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

    modifyEffort({commit, state}, req) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEffort.modifyEffort(req.id, req.form)
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

    deleteEffort({commit, state}, id) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEffort.deleteEffort(id)
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