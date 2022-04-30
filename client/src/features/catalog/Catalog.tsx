import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react'
import { Product } from '../../app/models/product';

interface Props {
  products: Product[];
  //addProduct: () => void;
}

function Catalog({products}: Props) {
  return (
    <>
      <div>Catalog</div>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl}/>
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Catalog