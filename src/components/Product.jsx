import paquete from '../assets/paquete.jpeg'

import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Product = forwardRef(( props, ref ) => {
    return (
        <div ref={ref} className='div_product'>
          <img src={paquete} className="paquete" alt="foto" />
        </div>
    )
})

export default Product