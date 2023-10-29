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

import { useRef } from 'react'

const App = () => {
  console.log('Feliz Navidad from component')

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
          name: 'nueces molidas'
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
          name: 'azúcar de vainilla'
        },
        {
          id: 5, 
          name: 'yemas de huevo'
        },
        {
          id: 6, 
          name: 'cáscara de un limón'
        },
        {
          id: 7,
          name: 'mermelada'
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
        name: 'claras de huevo'
      },
      {
        id: 2, 
        name: 'azúcar glas'
      },
      {
        id: 3,
        name: 'coco rallado'
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
        name: 'nata montada'
      },
      {
        id: 4,
        name: 'azúcar glas'
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
          name: 'ron'
        },
        {
          id: 6,
          name: 'mantequilla'
        },
        {
          id: 7,
          name: 'azúcar glas'
        },
        {
          id: 8,
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
        name: 'yemas de huevo'
      }
    ],
      foto: pernicky_foto
    }
  ]

 const containerStyle = {
    width: '100%', // 70%
    height: '480px', // 480px
    margin: '0 auto'
  }

  // parentWidth 870


  // props drilling - bad approach
  const introRef = useRef(null)
  const productRef = useRef(null)
  const galletasRef = useRef(null)

  return (
    <>
    <Navbar introRef={introRef} productRef={productRef} galletasRef={galletasRef}/>
    <div style={containerStyle}>
      <ImageSlider galletas={galletas} parentWidth={1500} />  
    </div>
      <Intro  ref={introRef}/>
      <Product ref={productRef}/>
      <Galletas ref={galletasRef} galletas={galletas} />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App