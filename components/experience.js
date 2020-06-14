import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import IlluminateLogo from './comp_images/IlluminateEducation.png';
import DASBLogo from './comp_images/DASB.png';
import Permiaslogo from './comp_images/PERMIAS.png';
import SclLogo from './comp_images/shopee-logo.png';


class Experience extends Component{
    render(){
        return(
            <div className="my-font">
                <Grid className="experience-grid">
                    <Cell col={6}>
                    <img className="left-text" src={SclLogo} width="450px" height="auto"></img>

                    <div className="left-text">
                        <div className="text-border">
                            <p className="font-large">Illuminate Education</p>
                            <p className="font-medium">Technical Intern</p>
                            <p>As a technical intern at Illuminate Education, I was given the opportunity to work closely and collaboratively with the Data Analyst in conducting analysis of data to ensure data accuracy as well as to document company’s product usage and solve data needs in a scalable method.</p>
                            <a href="https://www.illuminateed.com/" rel="noopener noreferrer" target="_blank">
                                <button className="button-type">Illuminate Education Website</button>
                            </a>
                        </div>
                    </div>

                    <img className="left-text" src="https://brand.wisc.edu/content/uploads/2016/11/readability-03.jpg" width="450px" height="auto"></img>


                    <div className="left-text">
                        <div className="text-border">
                            <p className="font-large">PERMIAS Madison</p>
                            <p className="font-medium">Vice President</p>
                            <p>
                            PERMIAS Madison is a student organization in University of Wisconsin- Madison that thrives in building a community network as well as in promoting cultural diversity. As the Vice President, I collaborated with the President in advising 2 divisions within the organization as well as making decisions that support our mission and vision statement.                            </p>

                            <a href="https://permiasmadison.wixsite.com/permias-madison" rel="noopener noreferrer" target="_blank">
                                <button className="button-type">PERMIAS Madison Website</button>
                            </a>
                        </div>
                    </div>

                    <img className="left-text" src= {DASBLogo} width="450px" height="auto"></img>


                    </Cell>

                    <Cell col={6}>

                    <div className="right-text">
                        <div className="text-border">
                            <p className="font-large">Shopee Code League (In Progress)</p>
                            <p className="font-medium">
                                Challenge Participant
                            </p>
                            <p>Shopee Code League is a 2-month online coding challenge that includes 8 competitions, algorithm questions as well as training workshops. Together with a group of 3 other talented Computer Science students, we participate in this Code League to learn, solve problems and challenge ourselves.</p>
                            <a href="https://careers.shopee.sg/codeleague/" rel="noopener noreferrer" target="_blank">
                                <button className="button-type">Shopee Code League Website</button>
                            </a>
                            </div>
                        </div>

                        <img className="right-text"src={IlluminateLogo}width="450px" height="auto"></img>

                        <div className="right-text">
                            <div className="text-border">
                            <p className="font-large">
                                MERIT Library at UW- Madison 
                            </p>
                            <p className="font-medium">
                                IT Assistant
                            </p>
                            <p>
                            At MERIT Library, I interacted with University of Wisconsin- Madison School of Education student and staff directly, providing computer troubleshooting as well as support to assess and resolve technical issues. There, I also install, manage and configure hardware and software for desktops, laptops and peripherals.                            </p>
                            <a href="https://merit.education.wisc.edu/" rel="noopener noreferrer" target="_blank">
                                <button className="button-type">MERIT Library Website</button>
                            </a>
                            </div>
                        </div>

                        <img className="right-text"src={Permiaslogo} width="450px" height="auto"></img>


                        <div className="right-text">
                            <div className="text-border">
                            <p className="font-large">De Anza Associated Student Body</p>
                            <p className="font-medium">Senator, Vice Chair of Diversity & Events Committee</p>
                            <p>
                            As a Senator and Vice Chair of the Diversity & Events Committee in DASB, I together with a group of 22 incredible students, managed a total student budget of over $1.285 million to programs and organizations on campus. Besides, I also took charge in facilitating events that promote multicultural diversity to about 20,000 students.                            </p>
                            <a href="https://www.deanza.edu/dasb/" rel="noopener noreferrer" target="_blank">
                                <button className="button-type">DASB Website</button>
                            </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
                
            </div>
        );
    }
}
export default Experience;