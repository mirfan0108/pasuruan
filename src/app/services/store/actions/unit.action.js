import MasterUnit from '../../api/MasterUnit'

export default {
    getUnits({ commit, state }, opt) {
        let responseData
        state.onLoad = true
        return new Promise((resolve, reject) => {
            try {
                MasterUnit.getUnit(opt.page, opt.limit, opt.search)
                .then(_resp => {
                    if(_resp.data && _resp.data.content.length > 0) {
                        responseData = _resp.data
                        state.Units = _resp.data.content
                        state.totalUnits = _resp.data.total
                    } else {
                        state.Units = []
                        state.totalUnits = 0
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

    addUnits({commit, state}, form) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterUnit.addUnit(form)
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

    modifyUnit({commit, state}, req) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterUnit.modifyUnit(req.id, req.form)
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

    deleteUnit({commit, state}, id) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterUnit.deleteUnit(id)
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