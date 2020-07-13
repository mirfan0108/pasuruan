import MasterEquipment from '../../api/MasterEquipment'

export default {
    getEquipments({ commit, state }, opt) {
        let responseData
        state.onLoad = true
        return new Promise((resolve, reject) => {
            try {
                MasterEquipment.getEquipment(opt.page, opt.limit, opt.search)
                .then(_resp => {
                    if(_resp.data && _resp.data.content.length > 0) {
                        responseData = _resp.data
                        state.Equipments = _resp.data.content
                        state.totalEquipments = _resp.data.total
                    } else {
                        state.Equipments = []
                        state.totalEquipments = 0
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

    addEquipments({commit, state}, form) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEquipment.addEquipment(form)
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

    modifyEquipment({commit, state}, req) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEquipment.modifyEquipment(req.id, req.form)
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

    deleteEquipment({commit, state}, id) {
        state.onLoad = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                MasterEquipment.deleteEquipment(id)
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