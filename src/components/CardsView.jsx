import React from 'react'
import ShopCard from './ShopCard'

function CardsView(props) {
    return (
        <div style = {{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
          }}>
            {props.card.map(item => <ShopCard card={item}/>)}
        </div>
    )
}

export default CardsView
