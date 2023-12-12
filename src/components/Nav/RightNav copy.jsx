import styled from 'styled-components'


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    ul {
        padding-right: 20px;
        padding-bottom: 20px;
        z-index: 9;
        cursor: pointer;
    }

    li {
        color: white;
        cursor: pointer;
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #00A693;
        position: fixed;
        margin-top: 0px;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        z-index: 9;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;


    }
`

const RightNav = ( {open, introRef, productRef, galletasRef } ) => {


    return (
        <>
            <Ul open={open}>


                <ul>
                    <li onClick={() => introRef.current.scrollIntoView({
                        behavior: 'smooth'
                    })}>
                        <b>Venta</b>
                    </li>
                    <li onClick={() => productRef.current.scrollIntoView({
                        behavior: 'smooth',
                    })}>
                        <b>Galletas Checas</b>
                    </li>
                    <li onClick={() => galletasRef.current.scrollIntoView({
                        behavior: 'smooth'
                    })}>
                        <b>Ingredientes</b>
                    </li>
                </ul>
            </Ul>
        </>
    )
}

export default RightNav