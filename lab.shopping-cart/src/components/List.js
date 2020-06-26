// Lista produktów
import React from 'react'

export default function List(props) {
    return (
        <ul>
            {props.products.map((product)=>{
                return <li>{product.name} - {product.price} PLN
                <button onClick={()=>props.removeProduct(product)}>Usuń</button></li>
            })}
        </ul>
    )
}
