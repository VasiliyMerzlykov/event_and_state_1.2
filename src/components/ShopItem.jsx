import React from 'react'

function ShopItem(props) {
    let card = props.card;
    return (
        <div style = {{display: 'flex', msFlexDirection: "row", justifyContent: 'space-between', height: '50px'}}>
            <img src = {card.img} alt = "" style={{height: '50px',}}></img>
            <p>
                {card.name}
            </p>
            <div>
                {card.color}
            </div>
            <div>
                {card.price}
            </div>
            <button>
                ADD to CART
            </button>
        </div>
    )
}

export default ShopItem
