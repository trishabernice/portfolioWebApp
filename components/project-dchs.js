import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dchs1 from './comp_images/dchs-1.png';
import dchs2 from './comp_images/dchs-2.png';
import dchs3 from './comp_images/dchs-3.png';


class ProjectDCHS extends Component{
    render(){
        return(
            <div className="my-font">
                <Grid className="projectsbackground-grid">
                    <Cell col={6}>
                    <div className="left-text">
                        <div className="project-largeborder">
                            <p className="font-xlarge">Dane County Humane Society Mobile Application</p>
                            <p>
                             To give a little bit of background, I grew up with rabbits, dogs, and little chicks. So, it was a given that I love animals. That said, when I had to come up with a project for a Software Engineering class I took in UW-Madison, I decided to develop a mobile application for the Dane County Humane Society - a non-profit, community-supported organization that has an open admission shelter to all animals. With a team of 4 other students, the mobile application was successfully developed in about 8 weeks. 
                            </p>
                            <p>The DCHS Mobile Application was designed and developed to correct problems, as well as to serve as a platform that creates an enhanced experience for both DCHS staff as well as customers. To start, my teammates and I created a Design and Specifications file to document all details regarding the application. This was the file we referred to and constantly updated as we progressed into building the application, as we practised Scrum development process. Besides, we designed the application around the Model View Presenter (MVP) Architecture, and tested the android application on a Nexus 6 API 28 phone. </p>
                            <p>For the back-end side of the application, we used Firebase Cloud Firestore as our database. This is where we manage data transmission, store user data and collections of documents for the animals. As for the front-end, we chose to write the UI in Dart, using the Flutter Framework. I had no knowledge about Dart/Flutter prior to the project, but it was definitely fun getting to learn and experiment with a new language!</p>
                           
                        </div>
                    </div>
                    <img className="left-text" src={dchs3} width="530px" height="auto"></img>

                    </Cell>

                    <Cell col={6}>
                        <img className="right-text" src= {dchs2} width="530px" height="300px"></img>
                        <img className="right-text" src= {dchs1} width="530px" height="auto"></img>

                        <div className="right-text">
                            
                            <div className="project-border">
                            <p>For the design, we focused on designing functionalities that do not exist on the DCHS Website, which we believed would be solving some problems for DCHS customers. These functionalities include: (1) Calendar (customers will be able to filter and check upcoming event details based on choice) (2) Notifications (alerts customers when they have upcoming events/classes) 
                                Then, we implemented extra functionalities (such as Add, Edit, and Delete animal) that allow DCHS staff to modify animal data straight from the mobile application itself, which will update the data in our database.</p>
                            <p>The DCHS Mobile Application is definitely a memorable project, not only because it was the perfect combination of my passion for animals and programming, but also because I got to experiment with a new language and technology! This project also challenged both my technical skills and creativity, in addition to teaching me how to communicate effectively and efficiently with my team members.</p>
                            <p>Note: The DCHS Mobile Application was developed for educational purposes and is NOT available for public use.</p>
                            </div>
                        </div>



                    </Cell>
                </Grid>
                
            </div>
        );
    }
}
export default ProjectDCHS;