import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Experience from './experience';
import ProjectDCHS from './project-dchs';
import ProjectWebApp from './project-webapp';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/project-dchs" component={ProjectDCHS}/>
        <Route path="/project-webapp" component={ProjectWebApp}/>

    </Switch>
)

export default Main;