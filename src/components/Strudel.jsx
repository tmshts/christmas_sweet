import Header from './Header'
import Ingredients from './Ingredients'
import Foto from './Foto'


// eslint-disable-next-line react/display-name
const Strudel = ({ strudel }) => {

    return (
      <div>
        <div className='galletas_intro'>
          Strudel de Manzana contiene siguientes ingredientes:
        </div>

        <div className='div_galletas'>
          <div className="font_titulos"><Header dulce_header={strudel.name} /> </div>
          <div className='div_cukrovi'><Foto dulce_foto={strudel.foto} /> </div>
          <div><Ingredients dulce_ingredients={strudel.ingredients} /> </div>
        </div>
      </div>
    )
  }

export default Strudel