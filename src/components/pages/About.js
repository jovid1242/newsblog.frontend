import React from "react";
import Header from '../header/Header'

function About() {
    return (
        <div className="single-post-page single-page">
            <Header />
            <div className="container">
                <div className="s-post-page">
                    <div className="s-post-header clearfix">
                        <div className="col-md-24">
                            <img src="images/icons/single-page-1.jpg" alt="" />
                            <div className="s-post-title">
                                <h1>About Me</h1>
                            </div>
                        </div>
                    </div>
                    <div className="s-post-content">
                        <div className="container">
                            <div className="col-md-offset-6 col-md-12">
                                <div className="s-post-text">
                                    <p>
                                        David Cameron is poised to return as U.K. prime minister after steering his Conservatives
                                        to an unexpected majority, helped by a landslide for nationalists in Scotland at Labour’s expense.
                                    </p>
                                    <p>
                                        The pound jumped as projections of the final tally in the British general
                                        election indicated that the Conservatives had defied opinion polls to easily
                                        defeat Ed Miliband’s Labour Party. With most seats declared, the BBC forecast
                                        the Tories to take 331 of Parliament’s 650 seats to Labour’s 232 seats, a result
                                        that would allow Cameron to ditch his Liberal Democrat coalition partner of the
                                        past five years and govern alone.
                                    </p>
                                    <blockquote>
                                        Hi! My Name is Ruth.
                                    </blockquote>
                                    <img src="images/content-image-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;