import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import reactLogo from './comp_images/react-logo.jpg';
import WebAppPic from './comp_images/webapp-pic.png';


class ProjectWebApp extends Component{
    render(){
        return(
            <div className="my-font">
                <Grid className="projectsbackground-grid">
                    <Cell col={6}>
                    <div className="left-text">
                        <div className="project-largeborder">
                            <p className="font-xxlarge">Portfolio Website</p>
                            <p>In effort to make my summer more meaningful, I decided to develop my own web application from scratch. This web application serves as a platform for me to showcase my technical skills, creativity, and lets me share a little bit more of who I am to the world!</p>
                            <p>The first step I took was to dedicate two weeks into learning a new language and technology, namely - Javascript and React. After a week and a half of practical tutorials and reading on main concepts, I decided that I wanted to immediately start the project, as I know that I learn best by doing.</p>
                            <p>As I started developing this web application, it was a little bit of a struggle as I had to constantly go through multiple tutorial videos and StackOverflow forums simultaneously, but the thought of developing my own web app from scratch was a huge motivator and positivity boost, and I couldn’t help but to work on it for a few days straight. I love getting creative with my work, so it was incredibly fun learning to use the various components in React-MDL, in addition to experimenting with the different elements of Autodesk Sketchbook (a painting and drawing software) to design my own background images for each page on this application.</p>
                            <p>All this to say, there was undoubtedly a learning curve to designing and developing this web application, but it’s also amazingly fun and I’ll continue to work on and  improve this!</p>
                        </div>
                    </div>

                    </Cell>

                    <Cell col={6}>
                        <img className="right-text"src={reactLogo} width="530px" height="auto"></img>
                        <img className="right-text"src={WebAppPic} width="530px" height="auto"></img>

                    </Cell>
                </Grid>
                
            </div>
        );
    }
}
export default ProjectWebApp;