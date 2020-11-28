import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import http from '../../http';
import validation from '../validation';
import Logo from '../logo/Logo';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import lStorage from '../localStorage';


function Register() {

    const [user, setUser] = useState({
        name: null,
        email: null,
        password: null,
        pass_confirm: null
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
            setLoading(true)
            http.post('register', user)
                .then((response) => {
                    NotificationManager.success('Success message', 'Успещно', 3000);
                    lStorage.RegisterStorage(response)
                    history.push('/')

                })
                .catch(function (errors) {
                    NotificationManager.error('Ошибка', `${errors.message}`);
                })
                .finally(() => {
                    // setLoading(false)
                })
        } else {
            return
        }
    }

    const valideAll = () => {
        const err = validation.registerValidation(user)
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
                    <div className="s-post-content">
                        <LoadingOverlay >
                            <Loader
                                loading={loading}
                                text={false}
                            />
                        </LoadingOverlay>
                        <div className="container">
                            <div className="col-md-offset-6 col-md-12">
                                <div className="s-post-text">
                                    <div className="contact clearfix">
                                        <form onSubmit={submitForm} className="contact-form">
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Имя"
                                                    onChange={handleUserInput}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="E-mail"
                                                    onChange={handleUserInput}
                                                />
                                                <input
                                                    type="password"
                                                    className="password"
                                                    name="password"
                                                    placeholder="Пароль"
                                                    onChange={handleUserInput}
                                                />
                                                <input
                                                    type="password"
                                                    name="pass_confirm"
                                                    className="pass_config"
                                                    placeholder="Повторите Пароль"
                                                    onChange={handleUserInput}
                                                />
                                            </div>
                                            <input
                                                type="submit"
                                                value="Регистрация" />
                                        </form>

                                        <center>
                                            <p><Link to="/login">У вас есть аккаунт ? Вход</Link></p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationContainer />
        </div >
    );
}

export default Register