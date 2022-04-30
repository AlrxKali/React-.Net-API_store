import { Props } from '../../app/models/product';
import ProductList from './ProductList';

function Catalog({products}: Props) {
  return (
    <>
      <div>Catalog</div>
      <ProductList products={products}/>
    </>
  )
}

export default Catalog