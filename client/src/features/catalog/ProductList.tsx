import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { Props } from '../../app/models/product';
import ProductCard from './ProductCard';
  
function ProductList({products}: Props) {
  return (
    <>
        <List>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </List>
    </>
  )
}

export default ProductList