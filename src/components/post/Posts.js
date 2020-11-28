import React, { useState } from "react";
// import PostCategory from '../post/postComponents/PostCategory';
// import PostLike from '../post/postComponents/PostLike';
// import PostAuthor from '../post/postComponents/PostAuthor';
import { Link } from 'react-router-dom';
import http from '../../http';


function Posts() {
    const [post, setPosts] = useState([])
    http.get('posts')
        .then((response) => {
            setPosts(response.data.map(e => e.text))
        })
        .catch ((error) => {
                console.log(error);
            })

    return (
        <div>
            <section className="right-sidebar">
                <div className="col-md-6">
                    <div className="widget-recent-posts">
                        <div className="r-widget-title">
                            <img src="images/icons/ribbon.png" alt="" />
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="recent-post">
                            <Link className="recent-post-img" to="#"><img src="images/widget-recent-post.jpg"
                                alt="" /></Link>
                            <Link to="#">
                                {post}
                            </Link>
                            <div className="post-info">
                                <Link className="post-comments" to="#"><img src="images/icons/comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="right-sidebar">
                <div className="col-md-6">
                    <div className="widget-recent-posts">
                        <div className="r-widget-title">
                            <img src="images/icons/ribbon.png" alt="" />
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="recent-post">
                            <Link className="recent-post-img" to="#"><img src="images/widget-recent-post.jpg"
                                alt="" /></Link>
                            <h3>
                                <Link to="#">
                                    "This Is the Trader Some of Deutsche Bank's Most Embarrassing Messages"
                                    </Link>
                            </h3>
                            <div className="post-info">
                                <Link className="post-comments" to="#"><img src="images/icons/comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="right-sidebar">
                <div className="col-md-6">
                    <div className="widget-recent-posts">
                        <div className="r-widget-title">
                            <img src="images/icons/ribbon.png" alt="" />
                            <h2>Recent Posts</h2>
                        </div>
                        <div className="recent-post">
                            <Link className="recent-post-img" to="#"><img src="images/widget-recent-post.jpg"
                                alt="" /></Link>
                            <h3>
                                <Link to="#">
                                    "This Is the Trader Some of Deutsche Bank's Most Embarrassing Messages"
                                    </Link>
                            </h3>
                            <div className="post-info">
                                <Link className="post-comments" to="#"><img src="images/icons/comment.png"
                                    alt="" />12</Link>
                                <img className="post-time-img" src="images/icons/calendar.png" alt="" /><time
                                    className="post-time" dateTime="2017">2 hours ago</time>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Posts;