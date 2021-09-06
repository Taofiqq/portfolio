import React from 'react'
import GitHub from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link';
import styled from 'styled-components'

const Menu = ({portfolioMenu}) => {
    return (
        <MenuStyled>
            {
                portfolioMenu.map((item) => (
                    <div key={item.id} className= "grid-item">
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="portolio display" />
                                <ul>
                                    <li>
                                        <a href={item.source}><GitHub /></a>
                                     </li>

                                    <li>
                                        <a href={item.demo}><LinkIcon /></a>
                                    </li>
                                </ul>
                            </div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
    ))
}
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
img {
    width: 220px;
}

`
export default Menu
