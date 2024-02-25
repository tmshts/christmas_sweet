import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Product_Description = forwardRef(( props, ref ) => {

    const { description } = props

    return (
      <div ref={ref} className='div_intro'>
        <h4>{description}</h4>
      </div>
    )
  })

  export default Product_Description