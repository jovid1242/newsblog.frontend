import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import http from '../../http';
import validation from '../validation';
import Logo from '../logo/Logo'
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import lStorage from '../localStorage';


function Login() {
    const [user, setUser] = useState({
        username: null,
        password: null
    })
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = user
        data[name] = value
        setUser(data);
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (valideAll()) {
            http.post('login', user)
                .then((response) => {
                    setLoading(true)
                    lStorage.LoginStorage(response)
                    history.push('/')
                    NotificationManager.success('Success message', 'Успещно', 3000);
                })
                .catch(function (errors) {
                    NotificationManager.error('Ошибка', `${errors.message}`);
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    const valideAll = () => {
        const err = validation.loginValidation(user)
        if (err.error) {
            NotificationManager.warning(err.message, 'Ошибка', 3000);
            return false
        }
        return true
    }

    return (
        <div className="single-post-page single-page">
            <div className="container">
                <Logo />
                <div className="s-post-page">
                    <LoadingOverlay >
                        <Loader
                            loading={loading}
                            text={false}
                        />
                    </LoadingOverlay>
                    <div className="s-post-content">
                        <div className="container">
                            <div className="col-md-offset-6 col-md-12">
                                <div className="s-post-text">
                                    <div className="contact clearfix">
                                        <form className="contact-form" onSubmit={submitForm}>
                                            <input
                                                type="text"
                                                name="username"
                                                className="name"
                                                placeholder="E-mail"
                                                onChange={handleUserInput} />
                                            <input
                                                type="password"
                                                name="password"
                                                className="password"
                                                placeholder="Пароль"
                                                onChange={handleUserInput} />
                                            <input
                                                type="submit"
                                                value="Авторизация" />
                                        </form>
                                        <center>
                                            <p><Link to="/register">У вас нет аккаунт ? Регистрация </Link></p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationContainer />
        </div>
    );
}

export default Login;