import React from 'react';
import { TextField, Button } from '@mui/material';

const ProductFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <TextField name="company" label="Company" onChange={handleChange} />
      <TextField name="category" label="Category" onChange={handleChange} />
      <TextField name="minPrice" label="Min Price" type="number" onChange={handleChange} />
      <TextField name="maxPrice" label="Max Price" type="number" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={() => fetchProducts(filters)}>Apply Filters</Button>
    </div>
  );
};

export default ProductFilter;
