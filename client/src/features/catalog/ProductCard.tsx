import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/product";
import { Link } from 'react-router-dom'
import agent from "../../app/api/agent";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

interface Props {
    product: Product;
}

function ProductCard({product}: Props) {
  const [loading, setLoading] = useState(false);
  
  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }
  return (
    <>
        <Card>
          <CardHeader avatar={
            <Avatar>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          } title={product.name}
          titleTypographyProps={{
            sx: {fontWeight: 'bold', color: '#009996'}
          }}/>
          <CardMedia
            component="img"
            sx={{heigh: 140, backgroundSize: 'contain', bgcolor:'#00baf7'}}
            image={product.pictureUrl}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color='#009996'>
              ${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
              {product.brand}
            </Typography>
          </CardContent>
          <CardActions>
            <LoadingButton loading={loading} onClick={() => handleAddItem(product.id)} size="small">Add to cart</LoadingButton>
            <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
          </CardActions>
        </Card>
    </>
  )
}

export default ProductCard