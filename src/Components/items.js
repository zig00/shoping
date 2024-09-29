import React from 'react'
import { useState } from 'react'
import ItemModal from '../Components/ItemModal'
import Oneitem from './oneitem'
const _Items = [
    {
        id: 0,
        name: "Lacoste T-Shirt",
        image: require('../images/lacoste shirt.jpg'),
        brand: 'Lacoste',
        brandId: 1,
        size: 'M',
        material: '100% Cotton',
        otherImages:{
            img1: require('../images/hugobosstshirt.jpg'),
            img2: require('../images/hugobosstshirt.jpg'),
            img3: require('../images/hugobosstshirt.jpg')
        },
        color: 'Black',
        category: 'Man',
        price: "22,49$",
        desc: "Una T-shirt BOSS con vestibilità regular fit. Caratterizzata da un logo a contrasto sul petto, questa maglia è realizzata in misto cotone-tessuto elasticizzato per il massimo comfort."
    },
    {
        id: 1,
        name: "Hugo Boss T-Shirt",
        image: require('../images/hugobosstshirt.jpg'),
        brand: 'HUGO BOSS',
        size: 'S',
        material: '100% Cotton',
        color: 'Blue',
        category: 'Man',
        brandId: 2,
        price: "25,00$",
        desc: "Una T-shirt BOSS con vestibilità regular fit. Caratterizzata da un logo a contrasto sul petto, questa maglia è realizzata in misto cotone-tessuto elasticizzato per regular fit. Caratterizzata da un logo a contrasto sul petto, questa maglia è realizzata in misto cotone-tessuto elasticizzato per il massimo comfort."
    },
    {
        id: 2,
        name: "Jeans Short Woman",
        image: require('../images/jshortswm.jpg'),
        brand: 'Levi`s',
        size: 'M',
        brandId: 4,
        material: 'Jeans',
        color: 'LightBlue',
        category: 'Woman',
        price: "23,00$",
         desc: "Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa "
    },
    {
        id: 3,
        name: "Jeans Short Woman",
        image: require('../images/jshortswm2.jpg'),
        brand: 'Levi`s',
        size: 'S',
        brandId: 4,
        material: 'Jeans',
        color: 'Blue',
        category: 'Woman',
        price: "19,00$",
         desc: "Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa "
    },
    {
        id: 4,
        name: "Jeans Short Man",
        image: require('../images/mshorts.jpg'),
        brand: 'Nike',
        size: 'M',
        brandId: 5,
        material: 'Jeans',
        color: 'Black',
        category: 'Woman',
        price: "12,00$",
        desc:"Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa Una T-shirt BOSS con vestibilità regular fit simo comfort. Caratterizzata da un logo a contrasto sul petto, questa"

    },


]

const Items = ({ brandId = null }) => {

    const [modalInfoIsOpen, SetModalInfoIsOpen] = useState(false)
    const [chosedItem, setChosedItem] = useState(null)
    const ListItems = _Items.filter((x) => x.brandId === brandId || brandId === null).map((item) =>
    <Oneitem {...item} onItemClick={onItemClick}/>
    );

    function onItemClick(item){
        setChosedItem(item)
        SetModalInfoIsOpen(true)
    }

    function onClose(){
        SetModalInfoIsOpen(false)
        
    }

    return (
        <div className='ItemsList' >
            {ListItems}
            <ItemModal
                isOpen={modalInfoIsOpen}
                onClose={onClose}
                chosedItem = {chosedItem}
            >
            </ItemModal>
            
        </div>
    )

}

export default Items
