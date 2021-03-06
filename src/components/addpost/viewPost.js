import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Logo from '../logo/Logo';
import copy from 'copy-to-clipboard';
// import validation from './validation';
import http from '../../http';
import CKEditor from 'ckeditor4-react';
import Modal from '@react-max/modal'

function viewPost() {
    const submitForm = (e) => {
        e.preventDefault()
        http.get('images')
            .then((response) => {
                setImage(response.data.map(e => <img onClick={onCopy(e.imagepath)} src={`${e.imagepath}`} alt="" />))
            })
            .catch(function (errors) {
                NotificationManager.error('Ошибка', `${errors.message}`);
            })
    }
    return (
        <div>
            <div className="single-post-page single-page">
                <Logo />
                <div className="container">
                    <div className="s-post-page">
                        <div className="s-post-content">
                            <div className="container">
                                <div className="col-md-offset-6 col-md-12">
                                    <div className="s-post-text">
                                        <div className="contact clearfix">
                                            <form className="contact-form" onSubmit={submitForm}>
                                                <button onClick={() => setVisible(true)}>Библиотека</button>
                                                {/* <div onClick={copy(pathImg)}>{image}</div> */}
                                                <Modal
                                                    title="Библиотека изображений"
                                                    visible={visible}
                                                    onClose={() => setVisible(false)}
                                                >
                                                    <button onClick={() => setVisible(false)}>Закрить</button>
                                                    <div id="img">{image}</div>
                                                </Modal>
                                            </form>
                                            <form className="contact-form" onSubmit={submitForm}>
                                                <CKEditor
                                                    data="<p>Some initial data</p>"
                                                    type="classic"
                                                    onChange={evt => setPost(evt.editor.getData())}
                                                />

                                                <input
                                                    type="submit"
                                                    value="Добавить новости"
                                                    onClick={postForm}
                                                />

                                            </form>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationContainer />
        </div>
    )
}
export default viewPost;