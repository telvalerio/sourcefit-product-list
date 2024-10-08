import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Grid, Card, CardContent, CardMedia, Typography, Container, CircularProgress } from '@mui/material';
import { Product } from '../interfaces/Products';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchAllProducts();
    }, []);
  
    useEffect(() => {
      if (search) {
        const debounce = setTimeout(() => {
          searchProducts();
        }, 300);
  
        return () => clearTimeout(debounce);
      } else {
        fetchAllProducts();
      }
    }, [search]);
  
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/list');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const searchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/search?q=${search}`);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <Container maxWidth="lg">
        <TextField
          label="Search products"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    );
  };
  
  export default ProductList;
