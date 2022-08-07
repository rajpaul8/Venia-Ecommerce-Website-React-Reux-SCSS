import axios from "axios";

const productsData_URL = "https://fakestoreapi.com/products/";

// Fetch all products
const getProducts = async () => {
  const response = await axios.get(productsData_URL);
  if (response.data) {
    localStorage.setItem("products", JSON.stringify(response.data));
  }
  return response.data;
};

const getProduct = async (productID) => {
  const response = await axios.get(productsData_URL + productID);
  if (response.data) {
    localStorage.setItem("product", JSON.stringify(response.data));
  }
  return response.data;
};

const productService = { getProducts, getProduct };

export default productService;
