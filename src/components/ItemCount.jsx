import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const ItemCount = ({ initial, onDecrement, onIncrement }) => {
    const [count, setCount] = useState(initial);

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
        onDecrement();
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
        onIncrement();
    };

    return (
        <ButtonGroup spacing='2'>
            <Button variant='outline' colorScheme='green' onClick={handleDecrement}>-</Button>
            <Button>{count}</Button>
            <Button variant='outline' colorScheme='green' onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    );
};

export default ItemCount;
