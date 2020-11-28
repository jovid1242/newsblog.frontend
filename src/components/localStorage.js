const lStorage = {
    RegisterStorage: (state) => {
        let regUserData = JSON.stringify({
            "name": state.data.data.name,
            "email": state.data.data.email,
            "token": state.data.meta.token
        })
        localStorage.setItem("user", regUserData)
    },
    LoginStorage: (state) => {
        let logUserData = JSON.stringify({
            "email": state.data.data.email,
            "name": state.data.data.name,
            "token": state.data.meta.token
        })
        localStorage.setItem("user", logUserData)
    }
}

export default lStorage;