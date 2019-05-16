import React, { Component } from 'react'





class Intro extends Component {
    constructor(){
        super();
        this.state = {
            designQuote:'',
            error:''
        }
    }

    // This is the READ in CRUD
    componentDidMount() {
        axios
            .get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
            .then(response => {
                this.setState({ designQuote: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ error:error });
            });
    }
    render() {
        return (
            <>
                <section id="intro" className="wrapper style1 fullscreen fade-up">
                    <div className="inner">
                        <h1>Frank Martinez</h1>
                        <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
                        and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
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


