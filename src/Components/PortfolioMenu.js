import React from 'react'

const PortfolioMenu = ({portfolioMenu}) => {
    return (
        <div>
           {
               portfolioMenu.map((item) => (
                   <div key={item.id}>
                       <h1>{item.title}</h1>
                       <img src={item.image} alt="" />
                       <p>{item.description}</p>
                       <a href={item.source}>Source Code</a>
                       <a href={item.demo}>Live Demo</a>
                   </div>
               ))
           }
        </div>
    )
}

export default PortfolioMenu
