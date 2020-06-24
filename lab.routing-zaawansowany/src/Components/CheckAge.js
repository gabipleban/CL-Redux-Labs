import React from 'react'

export default function CheckAge(props) {
    return (
        <div>
            CheckAge: {+props.match.params.age>=18 ? 'pelołetni' :"niepelnoletni"}
        </div>
    )
}
