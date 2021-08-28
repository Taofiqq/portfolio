import React, { useState } from 'react'
import Button from './Components/Button'
import PortfolioMenu from './Components/PortfolioMenu'
import portfolioData from './portfolioData';

// create button categories
const buttonCategories = ['All', ...portfolioData.map(item => item.category)]


const App = () => {
    const [buttons, setButtons] = useState(buttonCategories);
    const [portfolioMenu, setPortfolioMenu] = useState(portfolioData);

    // create a filter function that filters out the portfolio category
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
        <div>
            <div className="portfolio-header">
            <h1> Portfolio Projects</h1>
            </div>

            <Button button={buttons} filter={filter}/>
            <PortfolioMenu portfolioMenu={portfolioMenu}/>
        </div>
    )
}

export default App
