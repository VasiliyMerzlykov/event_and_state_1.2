import React from 'react'
import ShopItem from './ShopItem'

function ListView(props) {
    return (
        <div>
            {props.card.map(item => <ShopItem card = {item} />)}
        </div>
    )
}

export default ListView
