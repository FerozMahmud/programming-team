import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalSalary = 0;
    let programmerName = '';
    for (const programmer of cart) {
        totalSalary = totalSalary + programmer.salary;
        programmerName = programmerName + ' ' + programmer.name;
    }
    return (
        <div>
            <div>
                <h2>Create Your Team</h2>
                <h3>Added Developers:   {props.cart.lenght}</h3>
                <h3>Total Salary:   ${totalSalary}</h3>
            </div>
            <div className='selected-programmer'>
                <div>
                    <h2>Selected:</h2>
                    <h3>{programmerName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;