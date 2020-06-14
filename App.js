import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Menu" scroll >
            <Navigation>
                <Link to="/" className="my-font">Home</Link>
                <Link to="/aboutme" className="my-font">About Me</Link>
                <Link to="/projects" className="my-font">Projects</Link>
                <Link to="/experience" className="my-font">Experience</Link>
                <Link to="/contact" className="my-font">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/" className="my-font">Home</Link>
                <Link to="/aboutme" className="my-font">About Me</Link>
                <Link to="/projects" className="my-font">Projects</Link>
                <Link to="/experience" className="my-font">Experience</Link>
                <Link to="/contact" className="my-font">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>

</div>

    );
  }
}

export default App;
