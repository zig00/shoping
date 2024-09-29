import React from 'react'
import Oneitem from './oneitem'
import { useNavigate } from "react-router-dom";
const ItemModal = ({ isOpen, onClose, children, chosedItem }) => {

  
    const navigate = useNavigate();
    const OpenItemsInner = () => navigate('/itemsinner');
  

  return (
    <>
      {isOpen && (
        <div className='itemModalWrapper'>
          <div className='itemModalInner'>
            <button onClick={() => onClose()}>X</button>
            {children}
            <div className='itemfulldesc'>
              <div className='top'>
                <img src={chosedItem.image} alt=''></img>
                <div className='top-col'>
                <h3 className='ItemTitle'>{chosedItem.name}</h3>
                <p className='brand'>{chosedItem.brand}</p>
                <p className='size'><span>Size: </span>{chosedItem.size}</p>
                <p className='itemcolor'><span>color: </span>{chosedItem.color}</p>
                <h2 className='itemprice'>{chosedItem.price}</h2>
                <p className='itemdesc'>{chosedItem.desc}</p>
                <div className='modalitemsbuttons'>
                  <button className='btn add-to-cart'>Add to cart</button>
                  <button className='btn buy-now' onClick={OpenItemsInner}>Buy Now</button>
                </div>
                </div>
              </div>
              <div className='bottom'>
                <p>bottom bar modal</p>
              </div>

            </div>


            {/* <Oneitem {...chosedItem}/> */}
          </div>
        </div>
      )}

    </>
  )
}

export default ItemModal