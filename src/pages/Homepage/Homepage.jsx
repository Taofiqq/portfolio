import React from 'react'
import HomepageStyle from './Homepage.style';
import Particles from '../../Components/Particles'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Homepage = () => {
    return (
        <HomepageStyle>
            <div className="p-particles-js">
                <Particles />

                <div className="header-content">
                    <h1>Hi I'm <span>Taofiq</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nobis?</p>
                    <div className="icons">
                        <a href="https://github.com/Taofiqq" target="_blank" rel="noreferrer" className="icon i-github">
                            <GitHubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/taofiq-aiyelabegan-6241a1139/" target="_blank" rel="noreferrer" className="icon i-linkedin">
                            <LinkedInIcon/>
                        </a>
                        <a href="https://twitter.com/Taofiq__" target="_blank" rel="noreferrer" className="icon i-linkedin">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </HomepageStyle>
    )
}

export default Homepage
