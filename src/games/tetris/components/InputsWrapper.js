import React from 'react';
import { StyledInputsWrapper } from '../styles/StyledInputsWrapper';
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineRotateLeft } from 'react-icons/ai';
import Input from './Input';

const InputsWrapper = () => {
    return (
        <StyledInputsWrapper>
            <Input display={<AiOutlineArrowLeft />} direction="left"/>
            <Input display={<AiOutlineArrowDown />} direction="down"/>
            <Input display={<AiOutlineArrowRight />} direction="right"/>
            <Input display={<AiOutlineRotateLeft />} direction="rotate"/>
        </StyledInputsWrapper>
    )
}

export default InputsWrapper