import React from "react";
import LeftSidebar from '../post/LeftSidebar';
// import RitghtSidebar from '../post/RightSidebar';
import Posts from '../post/Posts';
import Header from '../header/Header'

function Home() {
    return (
        <div>
            <Header />
            <div className="theme-layout">
                <div className="main-content">
                    <div className="container">
                        <div className="row">
                            <LeftSidebar />
                            <Posts />
                            {/* <RitghtSidebar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;