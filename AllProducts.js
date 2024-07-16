import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import Pagination from '../components/Pagination';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(filters.company, filters.category, 10, filters.minPrice, filters.maxPrice);
      setProducts(data);
    };

    fetchProducts();
  }, [filters, page]);

  return (
    <div>
      <ProductFilter filters={filters} setFilters={setFilters} />
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} count={10} onChange={(e, value) => setPage(value)} />
    </div>
  );
};

export default AllProducts;
