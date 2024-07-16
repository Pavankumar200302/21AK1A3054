import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/';

export const getProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${API_URL}companies/${company}/categories/${category}/products`, {
      params: {
        'top-n': topN,
        minPrice,
        maxPrice
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
