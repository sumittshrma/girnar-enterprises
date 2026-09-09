// src/ProductContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const initialProducts = [
  {
    id: 'event-cup',
    name: 'Event Cup',
    capacity: '200ml / 250ml',
    description: 'Perfect for events, meetings, and corporate gatherings. Our event cups are designed for convenience and hygiene with secure sealing.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Bulk Order',
    price: 10,
    stock: 5000,
    category: 'Cups',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 'portable-bottle',
    name: 'Portable Bottle',
    capacity: '500ml / 1L',
    description: 'Convenient for travel, gym, and daily hydration. Made with BPA-free material for your safety and health.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center&auto=format',
    price: 25,
    stock: 3000,
    category: 'Bottles',
    status: 'active',
    createdAt: '2024-01-20',
  },
  {
    id: 'water-jar',
    name: 'Water Jar',
    capacity: '20 Liters',
    description: 'Ideal for homes, offices, and commercial spaces. Our 20L jars come with a secure seal for lasting freshness.',
    image: 'https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Subscription Available',
    price: 80,
    stock: 1000,
    category: 'Jars',
    status: 'active',
    createdAt: '2024-02-01',
  },
];

// Load products from localStorage or use initial
const loadProductsFromStorage = () => {
  try {
    const stored = localStorage.getItem('girnar_products');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.length > 0) {
        return parsed;
      }
    }
    return initialProducts;
  } catch (error) {
    console.error('Error loading products from localStorage:', error);
    return initialProducts;
  }
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(loadProductsFromStorage);

  // Save to localStorage whenever products change
  useEffect(() => {
    try {
      localStorage.setItem('girnar_products', JSON.stringify(products));
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
    }
  }, [products]);

  const addProduct = async (newProduct, imageFile) => {
    let imageUrl = newProduct.image || '';
    
    if (imageFile) {
      imageUrl = await fileToBase64(imageFile);
    }
    
    const productWithId = {
      ...newProduct,
      id: Date.now().toString(),
      image: imageUrl,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active',
    };
    setProducts([...products, productWithId]);
    return productWithId;
  };

  const updateProduct = async (updatedProduct, imageFile) => {
    let imageUrl = updatedProduct.image;
    
    if (imageFile) {
      imageUrl = await fileToBase64(imageFile);
    }
    
    const productToUpdate = {
      ...updatedProduct,
      image: imageUrl,
    };
    setProducts(products.map(p => p.id === updatedProduct.id ? productToUpdate : p));
    return productToUpdate;
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      setProducts, 
      addProduct, 
      updateProduct, 
      deleteProduct 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
