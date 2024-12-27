import { forwardRef } from "react"

import { SocialIcon } from 'react-social-icons'

// eslint-disable-next-line react/display-name
const Intro = forwardRef(( props, ref ) => {

    return (
      <div ref={ref} className='div_intro'>

          <h2 className="font_titulos">Venta de Las Galletas Checas de Navidad y Strudel de manzana</h2>

          <p>La idea es ofrecerles a Ustedes/los mexicanos las galletas checas originales y tradicionales de Navidad.
            Para lograr el sabor autentico de las galletas checas fue necesario traer los ingredientes desde la República Checa.</p>

          <p>Además, les ofrecemos el Strudel de Manzana checo. </p>
          
          <p>Todo fue horneado con el amor y la paz en la CDMX. </p>
    
          <p style={{fontSize: 'larger', fontWeight: 'bolder'}}>Sus pedidos a través de WhatsApp:</p>

          <p style={{fontSize: 'large', fontWeight: 'bolder'}}><SocialIcon url='https://whatsapp.com'
                          href="https://wa.me/420732964320"
                          target="_blank"
                          rel="noopener noreferrer"/> <span> </span>
          +420 732 964 320 </p>
              
        </div>
    )
  });

  export default Intro