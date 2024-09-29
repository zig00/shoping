import React from 'react'

function oneitem(props) {
    return (
        <div className='itemdiv' key={props.id} >
            <button className='OpenItemsmodal' onClick={() => props.onItemClick(props)}></button>
            <img src={props.image} alt=''></img>
            <div className='iteminfo' >
                <h3 className='ItemTitle'>{props.name}</h3>
                <p className='brand'>{props.brand}</p>
                <p className='size'><span>Size: </span>{props.size}</p>
                <p className='itemcolor'><span>color: </span>{props.color}</p>
                <h2 className='itemprice'>{props.price}</h2>
                
            </div>
        </div>
    )
}

export default oneitem