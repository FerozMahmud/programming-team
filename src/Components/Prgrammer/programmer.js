import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './programmer.css';

const programmer = (props) => {
    const { image, name, age, country, skill, salary } = props.programmer;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className='programmer'>
            <div className='programmer-box'>
                <div className='pro-img'>
                    <img className='programmer-img' src={image} alt="" />
                </div>
                <div>
                    <h3>Name: {name}</h3>
                    <h5>Age: {age}</h5>
                    <h5>Country: {country}</h5>
                    <h5>Skill: {skill}</h5>
                    <h4>Salary: ${salary}</h4>
                </div>
                <div className='btn-style'>
                    <button
                        onClick={() => props.handleAddToTeam(props.programmer)}
                        className='select-btn'>{element} Select to Team</button>
                </div>
            </div>
        </div>
    );
};

export default programmer;