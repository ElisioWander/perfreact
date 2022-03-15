import {useMemo} from 'react'
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id:number) => void;
}

//pegando os resultados um por um atraves do MAP e enviando para o component
//que irá ser responsábel pela renderização do produto
export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price
  //   }, 0)
  // }, [results])

  return (
    <div>
      <h1>{totalPrice}</h1>

      {results.map(product => {
        return (
           <ProductItem
              onAddToWishList={onAddToWishList}
              product={product}
              key={product.id}
            />
        )
      })}
    </div>
  );
}
