import Header from './Header'
import Ingredients from './Ingredients'
import Foto from './Foto'

import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Galleta = forwardRef(( props, ref ) => {

    const { galletas } = props

    return (
      <div ref={ref}>
      {galletas.map(galleta =>
        <div key={galleta.id}>
            <div className='div_galletas'>
              <div><Header galleta={galleta} /> </div>
              <div className='div_cukrovi'><Foto foto={galleta.foto} /> </div>
              <div><Ingredients ingredients={galleta.ingredients} /> </div>
          </div>
        </div>
      )}
      </div>
    )
  })

export default Galleta