import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return(
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    ) 
        

}
