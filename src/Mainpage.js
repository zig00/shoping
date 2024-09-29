import React, { useState }  from 'react'
import Adv1 from './Components/Adv1'
import Partners from './Components/partners'
import Items from './Components/items'

function Mainpage() {
  return (
    <div>Mainpage
     <Adv1/>
     <Partners/>
     <Items/>
    </div> 
  )
}

export default Mainpage