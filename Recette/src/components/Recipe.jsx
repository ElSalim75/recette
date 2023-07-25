import React from 'react'
import "./Recipe.css"

const Recipe = ({title, url, time}) => {
  return (
    <div className='recipe'>
        <img src={url} alt="" srcset="" />
        <div className='recipe-info'>
            <div>{title}</div>
            <div>Temps de préparation :  {time}min</div>
        </div>
        


    </div>
  )
}

export default Recipe