import linecke_foto from './assets/linecke_foto.jpeg'
import rohlicky_foto from './assets/rohlicky_foto.jpeg'
import kokosky_foto from './assets/kokosky_foto.jpeg'
import slehackove_foto from './assets/slehackove_foto.jpeg'
import vosi_foto from './assets/vosi_foto.jpeg'
import pernicky_foto from './assets/pernicky_foto.jpeg'
import Intro from './components/Intro'
import Galletas from './components/Galletas'
import Product from './components/Product'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import Navbar from './components/Nav/Navbar'
import ScrollToTop from './components/ScrollToTop'

import Product_Description from './components/Product_description'
import Strudel from './components/Strudel'
import paquete_foto from './assets/paquete.jpeg'
import strudel_foto from './assets/strudel.jpeg'
import { useRef } from 'react'


const App = () => {
  console.log('Feliz Navidad from component')

  const galletas_strudel = [
    rohlicky_foto,
    linecke_foto,
    kokosky_foto,
    slehackove_foto,
    vosi_foto,
    pernicky_foto,
    strudel_foto
  ]

  const galletas = [
    {
      id: 1,
      name: 'Vanilkové rohlíčky',
      ingredients: [
          {
          id: 1,
          name: 'harina común'
        },
        {
          id: 2, 
          name: 'mantequilla'
        },
        {
          id: 3,
          name: 'azúcar glas'
        },
        {
          id: 4,
          name: 'azúcar de vainilla'
        },
        {
          id: 5,
          name: 'almendras molidas'
        },
        {
          id: 6,
          name: 'yemas de huevo'
        },
        {
          id: 7,
          name: 'azúcar de vainilla'
        }
      ],
      foto: rohlicky_foto
    },
    {
      id: 2,
      name: 'Linecké',
      ingredients: [
        {
          id: 1,
          name: 'harina común'
        },
        {
          id: 2, 
          name: 'mantequilla'
        },
        {
          id: 3,
          name: 'azúcar glas'
        },
        {
          id: 4, 
          name: 'yemas de huevo'
        },
        {
          id: 5, 
          name: 'cáscara de un limón'
        },
        {
          id: 6,
          name: 'mermelada de grosella'
        }
      ],
      foto: linecke_foto
    },
    {
      id: 3,
      name: 'Kokosky',
      ingredients: [
      {
        id: 1,
        name: 'coco rallado'
      },
      {
        id: 2, 
        name: 'azúcar glas'
      },
      {
        id: 3,
        name: 'huevos'
      }
    ],
      foto: kokosky_foto
    },
    {
      id: 4,
      name: 'Šlehačkové',
      ingredients: [
        {
        id: 1,
        name: 'harina común'
      },
      {
        id: 2, 
        name: 'mantequilla'
      },
      {
        id: 3,
        name: 'crema para batir'
      },
      {
        id: 4,
        name: 'azúcar glas'
      },
      {
        id: 5,
        name: 'azúcar de vainilla'
      }
    ],
      foto: slehackove_foto
    },
    {
      id: 5,
      name: 'Vosí hnízda',
      ingredients: [
        {
        id: 1,
        name: 'bizcochos'
      },
      {
        id: 2, 
        name: 'mantequilla'
      },
      {
        id: 3,
        name: 'azúcar glas'
      },
      {
        id: 4,
        name: 'cacao'
      },
      {
        id: 5,
        name: 'leche'
      },
      {
        id: 6, 
        name: 'ron'
      },
      {
        id: 7,
        name: 'yemas de huevo'
      }
    ],
      foto: vosi_foto
    },
    {
      id: 6,
      name: 'Perníčky (Galletas de jengibre)',
      ingredients: [
        {
        id: 1,
        name: 'harina común'
      },
      {
        id: 2, 
        name: 'azúcar glas'
      },
      {
        id: 3,
        name: 'bicarbonato sódico'
      },
      {
        id: 4,
        name: 'especias de jengibre'
      },
      {
        id: 5,
        name: 'mantequilla'
      },
      {
        id: 6, 
        name: 'huevos'
      },
      {
        id: 7,
        name: 'miel'
      },
      {
        id: 8,
        name: 'claras de huevo'
      }
    ],
      foto: pernicky_foto
    }
  ]

  const strudel = {
    id: 1,
    name: 'Strudel de Manzana',
    ingredients: [
      {
      id: 1,
      name: 'pasta hojaldre'
      },
      {
        id: 2, 
        name: 'manzanas sin cascaras'
      },
      {
        id: 3,
        name: 'canela'
      },
      {
        id: 4,
        name: 'azúcar moscabado'
      },
      {
        id: 5,
        name: 'coco'
      },
      {
        id: 6, 
        name: 'núez'
      },
      {
        id: 7,
        name: 'huevo'
      },
      {
        id: 8,
        name: 'uva pasa'
      },
      {
        id: 9,
        name: 'yema de huevo'
      },
      {
        id: 10,
        name: 'azúcar glas'
      },
  ],
  foto: strudel_foto
  }

 const containerStyle = {
    width: '100%', // 70%
    height: '480px', // 480px
    margin: '0 auto'
  }

  // parentWidth 870


  // props drilling - bad approach
  const introRef = useRef(null)
  const productGalletasRef = useRef(null)
  const productStrudelRef = useRef(null)
  const galletasRef = useRef(null)

  return (
    <>
    <Navbar introRef={introRef} productGalletasRef={productGalletasRef} productStrudelRef={productStrudelRef} galletasRef={galletasRef}/>
    <div style={containerStyle}>
      <ImageSlider galletas_strudel={galletas_strudel} parentWidth={1500} />  
    </div>
      <Intro  ref={introRef}/>
      <Product_Description ref={productGalletasRef} description="El paquete navideño de las galletas checas cuesta 500 MXN / aprox. 300 g:"/>
      <Product product={paquete_foto}/>
      <Product_Description ref={productStrudelRef} description="Strudel de manzana cuesta 450 MXN / aprox. 500 g:"/>
      <Product product={strudel_foto} />
      <Galletas ref={galletasRef} galletas={galletas} />
      <Strudel strudel={strudel} />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App