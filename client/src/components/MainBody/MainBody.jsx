import React, { Component } from 'react'

import Intro from './Intro.jsx';
import WorkHistory from './WorkHistory.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Contact from './Contact.jsx';




class MainBody extends Component {
    render() {
        return (
            <>
                <div id="wrapper">
                
                    <Intro 
                        quoteApi={this.props.quoteApi}
                    />
                    <WorkHistory />
                    <WhatWeDo />
                    <Contact />

                </div>
            </>
        );
    }
}



export default MainBody



