import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Logo from '../logo/Logo';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import http from '../../http';
// import { Link } from "react-router-dom";
// import validation from './validation';
// import Rodal from 'rodal'
// import 'rodal/lib/rodal.css'

function AddPhoto() {

    const [imagename, setImage] = useState({
        file: null
    })
    const [loading, setLoading] = useState(false)

    const handleFileInput = (e) => {
        setImage({ file: e.target.files[0] });
    }

    const [ulrimg, setUrlImg] = useState({
        name: null,
        path: null
    })
    console.log(ulrimg)
    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', imagename.file);
        http.post('upload', formData)
            .then((response) => {
                setUrlImg({ name: response.data.data.images, path: response.data.data.image_path })
                NotificationManager.success('Success message', 'Успещно', 3000);

                setLoading(true)
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
                    <LoadingOverlay >
                        <Loader
                            loading={loading}
                            text={false}
                        />
                    </LoadingOverlay>
                    <div className="s-post-page">
                        <div className="s-post-content">
                            <div className="container">
                                <div className="col-md-offset-6 col-md-12">
                                    <div className="s-post-text">
                                        <div className="contact clearfix">
                                            <form className="contact-form" onSubmit={submitForm}>
                                                <input
                                                    type='file'
                                                    name="file"
                                                    id="upl_photo"
                                                    onChange={handleFileInput}
                                                />
                                                <input
                                                    type="submit"
                                                    value="Добавить фотография"
                                                />
                                            </form>
                                            <hr />
                                            <div>
                                                <img src="<%= typeof urlImg.image_path  %>" alt="" />
                                            </div>
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
    );
}

export default AddPhoto;