import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div>
                <Grid className="contact-grid">
                    <Cell col={12}>
                    <div className="contact-text">
                        <p className="font-xlarge">- Let's get Connected -</p>
                        <p>Connect with me on LinkedIn, Check out my Github, Follow me on Instagram or Send me an Email!</p>
                    </div>
                
                <div className="contact-links">
                {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/trisha-bernice/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                {/* Github */}
                    <a href="https://github.com/trishabernice" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                {/* Instagram */}
                    <a href="https://www.instagram.com/trishabernice/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true"/>
                    </a>
                {/* Email */}
                    <a href="mailto:trisha.bernice@yahoo.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-envelope-square" aria-hidden="true"/>                 
                    </a>

                </div>
                <div className="contact-text">
                    <p>
                        or Give me a call at:  +1 (608)590-2902!
                    </p>
                </div>
                    </Cell>
                </Grid>
            </div>
            
        );
    }
}
export default Contact;