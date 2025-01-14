import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/product';

export const addProduct = async (productData) => {
    const response = await axios.post(`${API_BASE_URL}/add`, productData);
    return response.data;
};
