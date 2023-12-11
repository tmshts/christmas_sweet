import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Intro = forwardRef(( props, ref ) => {

    return (
      <div ref={ref} className='div_intro'>
        <h2 className="font_titulos">Venta de Las Galletas Checas de Navidad</h2>
        <p>La idea es ofrecerles a Ustedes/los mexicanos las galletas checas originales y tradicionales de Navidad.
          Para lograr el sabor autentico de las galletas checas fue necesario traer los ingredientes desde la Republica Checa.
          Horneando de las galletas checas fue hecho con el amor y la paz en la CDMX.</p>
  
        <p>Más informaciónes y sus pedidos a través de <b>WhatsApp: +420 732 964 320.</b></p>
  
        <h4>El paquete navideño de las galletas checas cuesta 500 MXN / aprox. 300 g:</h4>
      </div>
    )
  });

  export default Intro