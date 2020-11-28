const validation = {
    PostValidation: (state) => {
        // if (!state.head) {
        //     return { error: true, message: 'Запольните Заголовок новости' }
        // }
        // const reSt = /^(<p>)/;
        // const reFn = /(<\/p>)$/;
        // if (!reSt.test(state.head)) {
        //     return { error: true, message: 'В начале заголовок дольжен быть тег <p>' }
        // }
        // if (!reFn.test(state.head)) {
        //     return { error: true, message: 'В конце заголовок дольжен быть тег </p>' }
        // }
        // if (!state.category) {
        //     return { error: true, message: 'Выберите один из категории' };
        // }
        // if (!state.image) {
        //     return { error: true, message: 'Файл не выбран' };
        // }
        // if (!state.text) {
        //     return { error: true, message: 'Запольните поле Text' };
        // }
    }
}

export default validation;