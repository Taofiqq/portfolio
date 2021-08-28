import React from 'react'

const Button = ({filter, button}) => {
    return (
        <div>
           {
               button.map((item, i) => {
                  return  <button onClick={()=> filter(item)}>{item}</button>
               })
           }
        </div>
    )
}

export default Button
