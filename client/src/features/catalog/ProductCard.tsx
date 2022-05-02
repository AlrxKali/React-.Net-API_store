import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/product";
import { Link } from 'react-router-dom'

interface Props {
    product: Product;
}

function ProductCard({product}: Props) {
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
            <Button size="small">Add to cart</Button>
            <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
          </CardActions>
        </Card>
    </>
  )
}

export default ProductCard