import React from 'react'

const Partners = [
    { id: 0, name: "H&M", image:require('../images/H&M.png')  },
    { id: 1, name: "Obey",image:require('../images/obey.png')  },
    { id: 2, name: "Shopify", image:require('../images/shopify.png') },
    { id: 3, name: "Lacoste", image:require('../images/lacoste.png') },
    { id: 4, name: "Levis", image:require('../images/levis.png') },
    { id: 5, name: "Amazon", image:require('../images/amazon.png')}
]

function partners() {
    const listItems = Partners.map((partner) =>
        <li key={partner.id}>
            <img src={partner.image} alt=''></img>
        </li>

    );
    return (
        <div className='partners'>
            <ul>{listItems}</ul>
        </div>
    )
}

export default partners