import React from 'react'
import Button from './Components/Button'
import PortfolioMenu from './pages/Portfolio/PortfolioMenu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Sidebar from './Components/SideBar/Sidebar';
import portfolioData from './data/portfolioData';
import styled from 'styled-components'
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import Blog from './pages/Blog/Blog'


// create button categories
const buttonCategories = ['All', ...portfolioData.map(item => item.category)]


const App = () => {
    // const [buttons, setButtons] = useState(buttonCategories);
   

    // // create a filter function that filters out the portfolio category
    // const filter = (button) => {
    //     if(button === 'All') {
    //         setPortfolioMenu(portfolioData);
    //         return;
    //     }
    //     const filteredData = portfolioData.filter(item => item.category === button)
    //     setPortfolioMenu(filteredData)
    //     setButtons(buttonCategories)
    // }
    return (
        <div>
            <Sidebar />
            <MainContentStyled>
                <Switch>
                    <Route path='/' exact>
                        <Homepage />
                    </Route>

                    <Route path='/about' exact>
                        <About />
                    </Route>

                    <Route path='/portfolio' exact>
                        <PortfolioMenu/>
                    </Route>

                    <Route path='/blog' exact>
                        <Blog/>
                    </Route>

                    <Route path='/contact' exact>
                        <Contact />
                    </Route>
                </Switch>   
            </MainContentStyled>

            {/* <Button button={buttons} filter={filter}/>
            <PortfolioMenu portfolioMenu={portfolioMenu}/> */}
        </div>
    )
}

const MainContentStyled = styled.main`
    background-color: #171010;
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
 
`

export default App
