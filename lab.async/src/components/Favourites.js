import React from 'react'

export default function Favourites(props) {
    return (
        <div>
            <h1>Ulubione cytaty</h1>
            <ul>
                {props.fav.map(el=>{
                    return <li>{el.quote}</li>
                })}
            </ul>
        </div>
    )
}


