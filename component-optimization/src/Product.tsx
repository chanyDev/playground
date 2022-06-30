import { memo } from 'react';

interface StudentProps {
  product: {
    name: string;
    price: number;
  };
}

const Product = ({ product }: StudentProps) => {
  return (
    <div className='student-wrapper'>
      <div>상품 이름 : {product.name}</div>
      <div>상품 가격 : {product.price.toLocaleString()}원</div>
    </div>
  );
};

export default memo(Product);
