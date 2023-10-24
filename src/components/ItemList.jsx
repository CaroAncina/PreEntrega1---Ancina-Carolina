import React from 'react'
import Item from './Item'

const Itemlist = ({ productos }) => {

    return (
        <div>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        category={p.category}
                    />
                )
            })
            }
        </div>
    )
}

export default Itemlist