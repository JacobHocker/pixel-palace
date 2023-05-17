import React from 'react';
import { StyledInputsWrapper } from '../styles/StyledInputsWrapper';
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineRotateLeft } from 'react-icons/ai';
import Input from './Input';




const InputsWrapper = ({ left, right, rotate, down }) => {
    
    
    
    return (
        <StyledInputsWrapper>
            <Input display={<AiOutlineArrowLeft />}  callback={left} direction="left"/>
            <Input display={<AiOutlineArrowDown />}  callback={down} direction="down"/>
            <Input display={<AiOutlineArrowRight />}  callback={right} direction="right"/>
            <Input display={<AiOutlineRotateLeft />} callback={rotate} direction="rotate"/>
        </StyledInputsWrapper>
    )
}

export default InputsWrapper