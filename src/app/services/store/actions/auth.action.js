import Account from '../../api/Account'

export default {
    doSign_In({ commit, state }, form) {
        console.log('vuex in action')
        state.onLoad = true
        state.isPreloader = true
        let responseData
        return new Promise((resolve, reject) => {
            try {
                Account.signIn(form)
                .then(_resp => {
                    responseData = _resp.data
                    if(_resp.data && _resp.data.token) {
                        let profile =  _resp.data.name
                        state.username = profile.first_name +" "+profile.last_name
                        state.flag = _resp.data.flag
                        sessionStorage.setItem('__SIGN_IN', JSON.stringify(profile))
                        sessionStorage.setItem('__FLAG', _resp.data.flag)
                        sessionStorage.setItem('__CSRF', JSON.stringify(_resp.data.token))
                        state.accessToken = _resp.data.token.access_token
                        // await localStorage.setItem('__pr', JSON.stringify(_resp.data.attributes.profile))
                        window.location.href = "/"
                    } else {
                        throw _resp.data
                    }
                })
                .finally(() => {
                    if(state.accessToken) {
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