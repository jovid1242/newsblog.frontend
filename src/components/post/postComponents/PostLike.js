import React from "react";
import { Link } from 'react-router-dom';

function PostLike() {
    return (
        <div className="post-options clearfix">
            <Link to="#"><i className="fa fa-heart"></i>582</Link>
            <Link to="#"><i className="fa fa-share-alt"></i>213</Link>
        </div>
    );
}

export default PostLike;