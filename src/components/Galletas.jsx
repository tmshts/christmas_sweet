import Header from './Header'
import Ingredients from './Ingredients'
import Foto from './Foto'

import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Galleta = forwardRef(( props, ref ) => {

    const { galletas } = props

    return (
      <div ref={ref}>
        <div className='galletas_intro'>
          El paquete navideño contiene siguientes galletas checas con los ingredientes corespondientes:
        </div>

        {galletas.map(galleta =>
          <div key={galleta.id}>
              <div className='div_galletas'>
                <div className="font_titulos"><Header dulce_header={galleta.name} /> </div>
                <div className='div_cukrovi'><Foto dulce_foto={galleta.foto} /> </div>
                <div><Ingredients dulce_ingredients={galleta.ingredients} /> </div>
            </div>
          </div>
        )}
      </div>
    )
  })

export default Galleta