import { useCallback, useMemo, useState } from 'react';

import Average from './Average';
import Product from './Product';

const ProductList = () => {
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
  });

  const [productList, setProductList] = useState([
    { id: 1, name: 'Jordan 1 Retro High OG Black Mocha', price: 742000 },
    { id: 2, name: 'Nike Dunk Low Retro Black', price: 179000 },
    { id: 3, name: 'Adidas Yeezy Foam RNNR Onyx', price: 223000 },
    { id: 4, name: 'New Balance 530 White', price: 91000 },
  ]);

  const addProduct = useCallback(() => {
    setProductList([
      ...productList,
      {
        id: productList.length + 1,
        name: '추가된 상품',
        price: 100000,
      },
    ]);
  }, [productList]);

  const averagePrice = useMemo(() => {
    return productList.reduce(
      (prev, current) => prev + current.price / productList.length,
      0
    );
  }, [productList]);

  return (
    <div className='wrapper'>
      <div className='add-form'>
        <input
          value={productForm.name}
          onChange={e => setProductForm({ ...productForm, name: e.target.value })}
          type='text'
          placeholder='상품 이름을 입력하세요'
        />
        <input
          value={productForm.price}
          onChange={e => setProductForm({ ...productForm, price: e.target.value })}
          type='text'
          placeholder='상품 가격을 입력하세요'
        />
        <button onClick={addProduct}>상품 추가</button>
      </div>
      <h2>상품 목록</h2>
      {productList.map(product => (
        <Product key={product.id} product={product} />
      ))}
      <Average average={averagePrice} />
    </div>
  );
};

export default ProductList;
