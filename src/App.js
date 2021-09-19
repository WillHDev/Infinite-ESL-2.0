import React from 'react'
import 'bulma/css/bulma.min.css';
import './styles/globals.css'
import Layout from './components/Layout'
import ResourceHighlight from './components/ResourceHighlight'
import ResourceList from './components/ResourceList'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resources: []};
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('http://localhost:8080/api/resources');
    const data = await response.json();
    //Probably needs to specify
    console.log(data);
    this.setState({ resources: data })
  }
  

  render() {
    const { resources } = this.state;
    return (
      <div className="App">
       
      <header className="App-header">
      <>
        <Layout>
         <ResourceHighlight 
            resources={resources.slice(2)}
       />   
         <NewsLetter /> 
        <ResourceList 
            resources={resources.slice(0,2)}
        /> 
        <Footer />
        </Layout>
     </>
      </header>
      
    </div>
    );
  }
}





export default App;
