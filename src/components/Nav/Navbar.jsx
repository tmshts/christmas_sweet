import styled from 'styled-components';

import Burger from './Burger'
import foto from '../../assets/arbol.png'

// credit to dieudonneAwa (GitHub Account) with the Navbar


const Nav = styled.nav`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    background-color: #00A693;
    border-radius: 10px;
    margin-bottom: 10px;
    color: white;

    .logo {
        padding: 2px 0 2px 3%;
    }
    
`

const Navbar = ( {introRef, productRef, galletasRef } ) => {
    return (
        <Nav>
            <div className='logo'>
                <img src={foto} className="foto_logo" alt="foto" />
            </div>

        <Burger introRef={introRef} productRef={productRef} galletasRef={galletasRef}/>

        </Nav>
    )
}

export default Navbar