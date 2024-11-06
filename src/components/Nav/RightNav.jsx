import styled from 'styled-components'


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        color: white;
        cursor: pointer;
        padding: 15px 30px;
    }

    @media (max-width: 810px) {
        flex-flow: column nowrap;
        background-color: #C30F16;
        position: fixed;
        margin-top: 20px;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        z-index: 9;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: white;
            cursor: pointer;
            padding: 20px 20px 0 0;
        }
    }
`

const RightNav = ({ open, introRef, productGalletasRef, productStrudelRef, galletasRef }) => {


    return (
            <Ul open={open}>
                <li onClick={() => introRef.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Venta</b>
                </li>

                <li onClick={() => productGalletasRef.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Galletas Checas</b>
                </li>

                <li onClick={() => productStrudelRef.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Strudel de Manzana</b>
                </li>

                <li onClick={() => galletasRef.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Ingredientes</b>
                </li>
            </Ul>
    )
}

export default RightNav