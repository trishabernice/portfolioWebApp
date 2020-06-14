import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button } from 'react-mdl';
import MyResume from './trisha-bernice-resume.pdf'

class LandingPage extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landingpage-grid">
                    <Cell col = {12}></Cell>
                        <div className="intro-text">
                            <h1 className="typewriter">Hello, I'm Trisha</h1>
                            <h3 className="my-font">and I love coding!</h3>
                            <a href={MyResume} download>
                                <button className="button-type" alt="trisha-bernice-resume">Download My Resumé</button>
                            </a>
                        </div>
                        
                </Grid>
            </div>
        );
    }
}
export default LandingPage;