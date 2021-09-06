import React, {useState} from 'react'
import Title from "../../Components/Title";
import { InnerLayout, MainLayout } from "../../styles/Layout";
import portfolioData from '../../data/portfolioData'
import Menu from '../../Components/Menu';

const PortfolioMenu = () => {
    const [portfolioMenu, setPortfolioMenu] = useState(portfolioData);
    return (
        <MainLayout>

            <Title title={'Portfolio Projects'} span={'Portfolio Projects'}/>
            <InnerLayout>
            <Menu  portfolioMenu={portfolioMenu}/>
            </InnerLayout>
         
        </MainLayout>
    )
}

export default PortfolioMenu


//  
