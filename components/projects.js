import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
import { Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';


class Projects extends Component{
    render(){
        return(
            <div className="my-font">
                <Grid className="projectsbackground-grid">
                    

                    {/* PROJECT #1*/}
                        <Card shadow={5} style={{width:'500px', margin:'auto'}}>
                            <CardTitle style = {{color: 'white', height: '176px', background: 'url(https://miro.medium.com/max/3840/1*kb1UHFqeepYDE7VxNMBFQw.png) center / cover'}}>
                                DCHS Mobile Application
                            </CardTitle>
                            <CardText>
                            The Dane County Humane Society Mobile Application is modeled after the non-profit organization - Dane County Humane Society. This mobile application was designed for efficiency, and has two different sides to it: (1) DCHS employees (2) Customers. The DCHS Mobile Application serves to provide all services the website already provides, in addition to introducing an array of new functionalities such as a Calendar, a Notifications tab, etc. 
                            </CardText>
                            <CardActions border margin="2px">
                                <Button>
                                <Navigation>
                                    <Link to="/project-dchs" className="my-font">Go to Project</Link>
                                </Navigation>
                                </Button>
                            </CardActions>
                        </Card>

                    {/* PROJECT #2*/}
                        <Card shadow={5} style={{width:'500px', margin:'auto'}}>
                            <CardTitle style = {{color: 'white', height: '176px', background: 'url(https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png) center / cover'}}>
                                Portfolio Website
                            </CardTitle>
                            <CardText>
                            This Portfolio Website is my first project for Summer 2020. The purpose of this application is to act as a platform to showcase my technical skills and creativity! I love learning and experimenting with new languages and technology, and this web app allowed me to play with React, React-MDL, React Router, CSS and Javascript. Designing this application was incredibly fun and I’ll definitely come back to improve the nitty gritty of this project!
                            </CardText>
                            <CardActions border margin="2px">
                                <Button>
                                <Navigation>
                                    <Link to="/project-webapp" className="my-font">Go to Project</Link>
                                </Navigation>
                                </Button>
                            </CardActions>
                        </Card>




                        </Grid>
            </div>
        );
    }
}
export default Projects;

