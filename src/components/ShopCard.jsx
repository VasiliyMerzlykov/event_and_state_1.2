import React from 'react'

function ShopCard(props) {
    let card = props.card;
    return (
        <div style = {{width: '300px', border: "1px solid red", marginLeft: '20px', marginTop: '40px'}}>
            <div>
                <h1>{card.name}</h1>
                <p>{card.color}</p>
                <img src={card.img} alt="" style={{ height: '300px', width: '300px' }} />
                <div style = {{display: 'flex', justifyContent: 'space-between',}}>
                    <div price>${card.price}</div>
                    <button className='add_cart'> Add to CART </button>
                </div>
            </div>
        </div >
    )
}

export default ShopCard
