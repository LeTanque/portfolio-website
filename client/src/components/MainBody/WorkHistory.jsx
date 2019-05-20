import React, { Component } from 'react'

import pic01 from '../../assets/img/pic01.jpg'
import pic02 from '../../assets/img/pic02.jpg'
import pic03 from '../../assets/img/pic03.jpg'
// import pic04 from '../../assets/img/pic04.jpg'
// import pic05 from '../../assets/img/pic05.jpg'
// import pic06 from '../../assets/img/pic06.jpg'



// Section One
class WorkHistory extends Component {
    render() {
        return (
            <>
            
                <section id="one" className="wrapper style2 spotlights">
                    <section>
                        <img src={pic01} alt="" data-position="center center" />
                        <div className="content">
                            <div className="inner">
                                <h2>Work History 1</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">Learn more</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={pic02} alt="" data-position="top center" />
                        <div className="content">
                            <div className="inner">
                                <h2>Work History 2</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">Learn more</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={pic03} alt="" data-position="25% 25%" />
                        <div className="content">
                            <div className="inner">
                                <h2>Work History 3</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">Learn more</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        );
    }
}

export default WorkHistory

