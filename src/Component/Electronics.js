import React from 'react'

const Electronics = (props) => {

    return (
        <ul>
            <li key={props.id}>
                {props.price}-{props.category}-{props.name}
            </li>
        </ul>
    )
}

export default Electronics