import React, { useState } from 'react'
import Items from '../Components/items'

const Brands = [
  { id: 0, name: "Gucci", image: require('../images/brands/gucci.png') },
  { id: 1, name: "Lacoste", image: require('../images/brands/Lacoste-Logo.png') },
  { id: 2, name: "Dior", image: require('../images/brands/cdior.png') },
  { id: 3, name: "Versace", image: require('../images/brands/versace.jpg') },
  { id: 4, name: "Prada", image: require('../images/brands/prada.png') },
  { id: 5, name: "Sisley", image: require('../images/brands/Sisley_Paris_logo.svg.png') },
  { id: 6, name: "Dolce & Gabbana", image: require("../images/brands/dolcegabana.png") },
  { id: 7, name: "Missoni", image: require('../images/brands/Missoni.png') },
  { id: 8, name: "MaxMara", image: require('../images/brands/Max-Mara-logo.png') },
  { id: 9, name: "Diesel", image: require('../images/brands/diesel.jpg') },
  { id: 10, name: "Moncler", image: require('../images/brands/Moncler-logo.png') },
  { id: 11, name: "Cavalli", image: require('../images/brands/robertocavallilogo.png') },
  { id: 12, name: "Ferrari", image: require('../images/brands/ferrari2.png') },
  { id: 13, name: "Canali", image: require('../images/brands/canali.png') },
  { id: 14, name: "Valentino", image: require('../images/brands/Valentino-Logo.png') }
  // { id: 15, name: "Louis Vuitton", image: require('../images/brands/Louis_Vuitton_logo_and_wordmark.png')}
]



function Fashion(props) {
  
  // გასაფილტრი ბრენდის მდგომარეობა
  const [_brandid, setBrandId] = useState(null);

  // ბრენდების მონაცემების ჩაწერა fashionbrands ცვლადში
  const fashionBrands = Brands.map((item) =>

    // ღილაკზე დაჭერისას ბრენდების უნიკალური id ის მინიჭება
    <ul onClick={()=>setBrandId(item.id)} key={item.id} className='brad-col1'>
      <img src={item.image} alt='' />
    </ul>

  )


  
  return (
    <>
      <div className='brands-row1'>
        {fashionBrands}
      </div>

      {/* items გვერდიდან წამოღებული ნივთების id მინიჭება */}
      <Items className="fashionsitemlist" brandId={_brandid}/>
      
    </>
   
  )
}
export default Fashion