export default {
    setBreadCrumb({state}, opt) {
        state.title = opt.title
        state.breadcrumb = opt.breadcrumb
    },
    setUser({state}, opt) {
        state.username = opt.title
        state.avatar = opt.breadcrumb
    }
}