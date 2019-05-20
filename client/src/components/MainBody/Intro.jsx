import React, { Component } from 'react'





class Intro extends Component {

    render() {
        console.log(this.props.quoteApi)
        return (
            <>
                <section id="intro" className="wrapper style1 fullscreen fade-up">
                    <div className="inner">
                        <h1>Frank Martinez</h1>
                            {this.props.quoteApi.map(quote => (
                                <React.Fragment key={quote.ID}>
                                    {quote.content}

                                </React.Fragment>
                            ))}
                            {/* {this.props.quoteApi} */}
                        <ul className="actions">
                            <li><a href="#one" className="button scrolly">Learn more</a></li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}



export default Intro


