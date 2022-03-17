import { memo, useMemo, useState } from "react";
import { AddProductToWishListProps } from "../components/AddProductToWishList/AddProductToWishList"

import dynamic from "next/dynamic";

//o dynamic funciona como algo chamado lazy loading(
  //Lazy loading é um padrão de projeto de software, comumente utilizado
  //em linguagens de programação, para adiar a inicialização de um objeto até 
  //o ponto em que ele é necessário. Isso pode contribuir para a eficiência 
  //no funcionamento de um programa, se utilizado adequadamente)
const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('../components/AddProductToWishList/AddProductToWishList')
  .then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>carregando...</span> 
  //esse segundo parâmetro funciona para que caso a conexão do usuário seja ruim
  //e demore para o componente aparecer quando ele executar uma função que chame
  //o component, possa ter alguma mensagem ou um spinner, por exemplo, para que o
  //usuário não fique com uma sensação de que não executou nada. 
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({
  product,
  onAddToWishList,
}: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Add to wishlist
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

//comparação rasa (Shallow Compare)
export const ProductItem = memo(ProductItemComponent);

//Comparação mais profunda (Deep Compare)
// export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
//   return Object.is(prevProps.product, nextProps.product)
// })
