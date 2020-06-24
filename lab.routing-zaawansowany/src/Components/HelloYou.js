import React from 'react'

export default function HelloYou(props) {
    console.log(props)
    
    return (
        <div>
            HelloYou:{props.match.params.name}
        </div>
    )
}
