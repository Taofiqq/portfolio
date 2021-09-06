import React from 'react'
import PortfolioMenu from './pages/Portfolio/PortfolioMenu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Sidebar from './Components/SideBar/Sidebar';
import styled from 'styled-components'
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import Blog from './pages/Blog/Blog'


const App = () => {
   
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
