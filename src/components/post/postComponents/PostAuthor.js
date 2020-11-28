import React from "react";
import { Link } from 'react-router-dom';

function PostAuthor() {
    return (
        <div className="post-author">
            <Link to="#"><img src="images/author.jpg" alt="" /></Link>
            <h4 className="author-name"><Link to="#">Lauren Dassy</Link></h4>
            <p><span className="author-job">Art Director</span></p>
        </div>
    );
}

export default PostAuthor;