import React from 'react';
import Search from '../icon/Search';
import Icons from '../icon/Icons';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

function Header() {
    // const user = JSON.parse(localStorage.getItem('user'))
    const removeUser = () => {
        localStorage.clear()
    }
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <header className="main-header">
                <div className="lauren-main-menu">
                    <div className="container">
                        <nav className="lauren-menu">
                            <ul className="main-menu">
                                <li><Link to="/">Главный</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><Link to="#">Категория</Link>
                                    <ul>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                        <li><Link to="#">Full Width</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/post">Post</Link></li>
                                <li><Link to="/contacts">Контакты</Link></li>
                                {user !== null ?
                                    <li><Link to="#" id="login">Добро пожаловать {user.name}</Link>
                                        <ul>
                                            <li><Link to="/addPhoto" >Добавыть фото к библиотеку</Link></li>
                                            <li><Link to="/addPost" >Добавыть Пост</Link></li>
                                            <li><Link onClick={removeUser} to="/login" >Выход</Link></li>
                                        </ul>
                                    </li> :
                                    <li>
                                        <Link to="/register" id="login">Регистрация</Link>
                                        <ul>
                                            <li><Link to="/login" >Вход</Link></li>
                                        </ul>
                                    </li>

                                }
                            </ul>
                            <Search />
                            <Icons />
                        </nav>
                    </div>
                </div>
                <Logo />
            </header>

            <div className="responsive-menu">
                <header>
                    <ul>
                        <li><Link className="menu-button" to="#"><i className="fa fa-close"></i></Link></li>
                    </ul>
                </header>
                <ul className="main-menu">
                    <li><Link to="/">Главный</Link></li>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="#">Категория</Link>
                        <ul>
                            <li><Link to="#">Full Width</Link></li>
                            <li><Link to="#">Full Width</Link></li>
                            <li><Link to="#">Full Width</Link></li>
                            <li><Link to="#">Full Width</Link></li>
                            <li><Link to="#">Full Width</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    {user !== null ?
                        <li><Link to="#" id="login">Добро пожаловать {user.name}</Link>
                            <ul>
                                <li><Link to="/addPost" >Добавыть Пост</Link></li>
                                <li><Link onClick={removeUser} to="/login" >Выход</Link></li>
                            </ul>
                        </li> :
                        <li>
                            <Link to="/register" id="login">Регистрация</Link>
                            <ul>
                                <li><Link to="/login" >Вход</Link></li>
                            </ul>
                        </li>

                    }
                </ul>
            </div>
        </div >
    );
}

export default Header;