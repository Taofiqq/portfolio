import React from 'react'
import styled from 'styled-components'

const Title = ({title, span}) => {
    return (
        <TitleStyle>
            <h1>{title}</h1>
            <span>{span}</span>
        </TitleStyle>
    )
}

const TitleStyle = styled.div`
    position: relative;

    h1 {
        font-size: 4rem;
        text-transform: uppercase;
        font-weight: 700;
        position: relative;
        z-index: 100;
       
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 12rem;
            height: .3rem;
            background-color: #152D35;
        }
    }

    span {
            color: rgba(25,29, 43,.44);
            text-transform: uppercase;
            font-weight: 700;
            font-size: 5rem;
            position: absolute;
            left: 10%;
            top: 30%;
            z-index: 0;
            
        }
`

export default Title
