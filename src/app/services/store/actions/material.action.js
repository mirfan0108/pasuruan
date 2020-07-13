import MasterMaterial from '../../api/MasterMaterial'

export default {
    getMaterials({ commit, state }, opt) {
        let responseData
        state.onLoad = true
        return new Promise((resolve, reject) => {
            try {
                MasterMaterial.getMaterial(opt.page, opt.limit, opt.search)
                .then(_resp => {
                    if(_resp.data && _resp.data.content.length > 0) {
                        responseData = _resp.data
                        state.Materials = _resp.data.content
                        state.totalMaterials = _resp.data.total
                    } else {
                        state.Materials = []
                        state.totalMaterials = 0
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

    addMaterials({commit, state}, form) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterMaterial.addMaterial(form)
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

    modifyMaterial({commit, state}, req) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterMaterial.modifyMaterial(req.id, req.form)
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

    deleteMaterial({commit, state}, id) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterMaterial.deleteMaterial(id)
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