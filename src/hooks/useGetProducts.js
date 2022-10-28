import { useEffect, useState } from "react";
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';


const useGetProducts = () => {
    const [products, setproducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setproducts(response.data);
    }, [])

    return products;
};
export default useGetProducts;
