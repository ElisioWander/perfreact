import { memo, useMemo } from 'react'

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
        <button onClick={() => onAddToWishList(product.id)} >Adicionar aos favoritos</button>
        {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

//comparação rasa (Shallow Compare)
export const ProductItem = memo(ProductItemComponent)

//Comparação mais profunda (Deep Compare)
// export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
//   return Object.is(prevProps.product, nextProps.product)
// })