import React from "react"

function ResendPost() {
    return (
        <div className="col-md-8">
            <div className="footer-widget-recent-post">
                <div className="footer-widget-title">
                    <h3>Recent Posts</h3>
                </div>
                <div className="f-recent-posts">
                    <div className="f-recent-post">
                        <img src="images/footer-recent-post-1.jpg" alt="" />
                        <h4><a href="#">Apple Watch Review</a></h4>
                        <p>I have always been told to believe in myself. But nobody has...</p>
                    </div>
                    <div className="f-recent-post">
                        <img src="images/footer-recent-post-2.jpg" alt="" />
                        <h4><a href="#">These Are the Happiest</a></h4>
                        <p>I have always been told to believe in myself. But nobody has...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResendPost;