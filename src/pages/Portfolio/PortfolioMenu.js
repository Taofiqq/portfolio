import React, {useState} from 'react'
import Title from "../../Components/Title";
import { InnerLayout, MainLayout } from "../../styles/Layout";
import portfolioData from '../../data/portfolioData'
import Menu from '../../Components/Menu';
import Button from '../../Components/Button'

// create button categories
const buttonCategories = ['All', ...portfolioData.map(item => item.category)]

const PortfolioMenu = () => {
    const [portfolioMenu, setPortfolioMenu] = useState(portfolioData);
    const [buttons, setButtons] = useState(buttonCategories);

     // // create a filter function that filters out the portfolio category
    const filter = (button) => {
        if(button === 'All') {
            setPortfolioMenu(portfolioData);
            return;
        }
        const filteredData = portfolioData.filter(item => item.category === button)
        setPortfolioMenu(filteredData)
        setButtons(buttonCategories)
    }
    return (
        <MainLayout>

            <Title title={'Portfolio Projects'} span={'Portfolio Projects'}/>
            <InnerLayout>
            <Button button={buttons} filter={filter}/>
            <Menu  portfolioMenu={portfolioMenu}/>
            </InnerLayout>
         
        </MainLayout>
    )
}

export default PortfolioMenu


//  
