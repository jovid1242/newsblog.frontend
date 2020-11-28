import React from "react";
import { Link } from 'react-router-dom';

function PostTags() {
    return (
        <div className="s-post-footer">
            <div className="s-post-tags">
                <ul className="post-tags">
                    <li><Link to="#">Life</Link></li>
                    <li><Link to="#">Sport</Link></li>
                    <li><Link to="#">Love</Link></li>
                    <li><Link to="#">Daily</Link></li>
                    <li><Link to="#">Travel</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default PostTags;