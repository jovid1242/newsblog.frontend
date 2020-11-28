import React from "react"
import { Link } from 'react-router-dom';

function LeftSidebar() {
    return (
        <div>
            <section className="left-sidebar">
                <div className="col-md-6">
                    <div className="widget widget-featured-post">
                        <h2 className="f-widget-title">Feature Story</h2>
                        <div className="f-post-content">
                            <h2 className="f-post-title">
                                <Link to="#">Global Temperature Records Just Got Crushed
                                            Again</Link></h2>
                            <p>It just keeps<br />getting hotter.</p>
                            <div className="post-info">
                                <Link className="post-comments" to="#"><img src="images/icons/white-comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/white-calendar.png" alt="" />
                                <time className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-mini-post">
                        <Link className="m-post-image" to="#"><img src="images/mini-post-1.jpg" alt="" /></Link>
                        <div className="m-post-content">
                            <div className="post-info">
                                <span className="post-category"><Link to="#">TECH</Link></span>
                                <Link className="post-comments" to="#"><img src="images/icons/comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                            <h2 className="m-post-title"><Link to="#">Apple Watch Review: You’ll Want One, but You
                                            Don’t Need One</Link></h2>
                        </div>
                    </div>
                    <div className="widget widget-mini-post">
                        <Link className="m-post-image" to="#"><img src="images/mini-post-1.jpg" alt="" /></Link>
                        <div className="m-post-content">
                            <div className="post-info">
                                <span className="post-category"><Link to="#">TECH</Link></span>
                                <Link className="post-comments" to="#"><img src="images/icons/comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                            <h2 className="m-post-title"><Link to="#">Apple Watch Review: You’ll Want One, but You
                                            Don’t Need One</Link></h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default LeftSidebar;