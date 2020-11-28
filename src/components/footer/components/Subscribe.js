import React from "react"

function Subscribe() {
    return (
        <div className="col-md-8">
            <div className="footer-widget-subscribe">
                <div className="footer-widget-title">
                    <h3>Subscribe</h3>
                </div>
                <div className="f-widget-subscribe">
                    <input type="text" placeholder="Enter Your E-Mail" className="f-subscribe" />
                    <a className="f-subscribe-button" href="#">Subscribe Now!</a>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;