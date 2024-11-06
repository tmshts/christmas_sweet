import { useState } from "react";
import styled from 'styled-components';
import RightNav from './RightNav'


const StyledBurger = styled.div`
    width: 2.5rem;
    height: 2rem;
    position: fixed;
    top: 35px;
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width: 860px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.4rem;
        background-color: ${({ open }) => open = 'white'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${ ( {open} ) =>  open ? 'rotate(45deg)' : 'rotate(0)' }
        }

        &:nth-child(2) {
            transform: ${ ( {open} ) =>  open ? 'translateX(0)' : 'translateX(0)' };
            opacity: ${ ( {open} ) =>  open ? '0' : '1' };
        }

        &:nth-child(3) {
            transform: ${ ( {open} ) =>  open ? 'rotate(-45deg)' : 'rotate(0)' }
        }

    }
`;

const Burger = ({ introRef, productGalletasRef, productStrudelRef, galletasRef }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} introRef={introRef} productGalletasRef={productGalletasRef} productStrudelRef={productStrudelRef} galletasRef={galletasRef}/>
        </>
    )
}

export default Burger