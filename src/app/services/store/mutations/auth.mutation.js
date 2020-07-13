export default {
    setToken(state, accessToken) {
        state.accessToken = accessToken;
    },
    setProfile(state, profile) {
        state.username = profile.first_name +' '+ profile.last_name
    }
}