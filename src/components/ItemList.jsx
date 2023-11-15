import React from 'react';
import Item from './Item';
import { Container } from '@chakra-ui/react';
import '../styles/item-list.css';

const Itemlist = ({ productos }) => {
    return (
        <div className='item-list'>
            {productos.map((p) => (
                <Container key={p.id}>
                    <Item
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        category={p.category}
                        image={p.image}
                    />
                </Container>
            ))}
        </div>
    );
}

export default React.memo(Itemlist);
