import React from 'react'
import Title from '../../Components/Title.jsx';
import {MainLayout} from '../../styles/Layout.js'
import AboutStyle from './About.style';

const About = () => {
    return (
        <MainLayout>
            <AboutStyle>
            <Title title="About Me" span="About Me"/>
            </AboutStyle>
        </MainLayout>
    )
}

export default About
