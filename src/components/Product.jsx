const Product = ({ product }) => {
    return (
      <>
        <div className='div_product'>
          <img src={product} className="paquete" alt="foto" />
        </div>
      </>
    )
}

export default Product