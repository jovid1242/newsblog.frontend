const validation = {
    registerValidation: (state) => {
        if (!state.name) {
            return { error: true, message: 'Запольните поле Имя' }
        }
        if (!state.email) {
            return { error: true, message: 'Запольните поле email' };
        }
        if (!state.password) {
            return { error: true, message: 'Запольните поле Пароль' };
        }
        if (!state.pass_confirm) {
            return { error: true, message: 'Запольните поле Повтор пароль' };
        }
        if (state.password !== state.pass_confirm) {
            return { error: true, message: 'Пароли не совпадают' };
        }
        if (state.password.length < 6) {
            return { error: true, message: 'Пароль дольжен содержать минимум 6 символов' };
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(state.email)) {
            return { error: true, message: 'Неверный адрес электронной почты' }
        }
        return { error: false, message: 'Успешно' };
    },
    loginValidation: (state) => {
        if (!state.username) {
            return { error: true, message: 'Запольните поле Email' };
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(state.username)) {
            return { error: true, message: 'Неверный адрес электронной почты' }
        }
        if (!state.password) {
            return { error: true, message: 'Запольните поле Пароль' };
        }
        if (state.password.length < 6) {
            return { error: true, message: 'Пароль дольжен содержать минимум 6 символов' };
        }
        return { error: false, message: 'Успешно' };
    }
}

export default validation