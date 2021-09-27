import React, { useEffect, useState } from 'react';
import './Programmers.css';
import Programmer from '../Prgrammer/programmer';
import Cart from '../Cart/Cart';

const Programmers = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    const handleAddToTeam = (programmer) => {
        const newCart = [...cart, programmer];
        setCart(newCart);
    }

    return (
        <div className='main-container'>
            <div className='programmers-container'>
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.id}
                        programmer={programmer}
                        handleAddToTeam={handleAddToTeam}
                    ></Programmer>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Programmers;