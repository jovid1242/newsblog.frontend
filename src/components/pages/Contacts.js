import React from "react";
import Header from '../header/Header'

function Contacts() {
    return (
        <div>
            <Header />
            <div className="single-post-page single-page">
                <div className="container">
                    <div className="s-post-page">
                        <div className="s-post-header clearfix">
                            <div className="col-md-24">
                                <img src="images/icons/single-page-1.jpg" alt="" />
                                <div className="s-post-title">
                                    <h1>Contact</h1>
                                </div>
                            </div>
                        </div>
                        <div className="s-post-content">
                            <div className="container">
                                <div className="col-md-offset-6 col-md-12">
                                    <div className="s-post-text">
                                        <div className="contact clearfix">
                                            <form className="contact-form" action="#" method="post">
                                                <input type="text" placeholder="Your Name" />
                                                <input type="email" placeholder="Your E-Mail" />
                                                <input type="url" placeholder="Website Adress" />
                                                <textarea name="message" placeholder="Your Message Here"></textarea>
                                                <input type="submit" value="Send Message" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;