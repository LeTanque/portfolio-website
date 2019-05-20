import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// import logo from './assets/img/logo.svg';

import Sidebar from './components/Sidebar.jsx';
import MainBody from './components/MainBody/MainBody.jsx';
import Footer from './components/Footer.jsx';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quoteApi:[],
      error:''
    }
  }

  // This is the READ in CRUD
  componentDidMount() {
    axios
      .get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3')
      .then(response => {
        this.setState({ 
          quoteApi: response.data 
        })
      })
      .catch(error => {
        this.setState({ error:error });
      });
  }

  render() {
    
    return (    
      <>
        
        {console.log(this.state.quoteApi)}
  
        
        <Sidebar />
  


        <Route 
          path='/'
          render={() =>
            <MainBody 
              quoteApi={this.state.quoteApi}
            /> 
          }
        />
        
  

        <Footer />

      </>
    )
  }
  
}


export default App;

