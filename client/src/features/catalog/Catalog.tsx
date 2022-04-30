import React from 'react'


function Catalog(props: any) {
  return (
    <>
      <div>Catalog</div>
      <ul>
        {props.products.map((product: any) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default Catalog