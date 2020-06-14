import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import AboutMePic from './comp_images/aboutme-pic.JPG';

class AboutMe extends Component{
    render(){
        return(
            <div>
                <Grid className="aboutme-grid">
                    <Cell col = {7}>
                        <div className="aboutme-text">
                            <h1 className="my-font">About Me</h1>
                            <p>
                            THIS WILL BE ONE MASSIVE PARAGRAPH WHERE I TALK ABOUT MYSELF. 
                            </p>
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                            Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu culpa qui officia deserunt mollit anim id est 
                            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </Cell>
                    <Cell col = {5}>
                        <img src={AboutMePic} height="625px" width="auto"></img>
                    </Cell>
                        
                </Grid>
            </div>
        );
    }
}
export default AboutMe;