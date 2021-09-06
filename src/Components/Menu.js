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
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
    ))
}
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;

        .grid-item {
            .portfolio-content {
                display: block;
                position: relative;

                img {
                    width: 100%;
                    height: 30vh;
                    object-fit: conver;
                }

                ul {
                    display: none
                }

                h3 {
                    font-size: 1.5rem;
                }
            }
        }


`
export default Menu
