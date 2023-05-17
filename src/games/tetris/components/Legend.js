import React from 'react';
import '../styles/Legend.css';
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Legend = () => {
    return (
        <div className='legendContainer'>
            
            
                <ul className='legendList'>
                    <li>
                        
                        <button className='legendBtn' ><AiOutlineArrowLeft /></button>
                        &nbsp;= Move Left
                    </li>
                    <li>
                        
                        <button className='legendBtn'><AiOutlineArrowDown /></button>
                        &nbsp;= Drop 
                    </li>
                    <li>
                        
                        <button className='legendBtn'><AiOutlineArrowRight /></button>
                        &nbsp;= Move Right
                    </li>
                    <li>
                        
                        <button className='legendBtn'><AiOutlineArrowUp /></button>
                        &nbsp;= Rotate
                    </li>
                </ul>
            

        </div>
    )
}

export default Legend