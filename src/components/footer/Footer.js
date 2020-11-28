import React from "react";
import Subscribe from "./components/Subscribe"
import MiniAbout from "./components/MiniAbout"
import ResendPost from "./components/ResendPost"

function Footer() {
    return (
        <div>
            <footer className="main-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <MiniAbout />
                            <ResendPost />
                            <Subscribe />
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Made it with love!</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;