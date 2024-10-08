import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Product Listing
      </Typography>
      <ProductList />
    </Container>
  );
};

export default App;
