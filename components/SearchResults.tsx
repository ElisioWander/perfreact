import {useMemo} from 'react'
import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from 'react-virtualized'

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

  //React Virtualized vai ajudar a controlar uma lista que esteja sendo exibida cuja o tamanho seja
  //muito grande. Utilizando essa lib fica mais fácil e performático a aplicação porque se tem um
  //controle de exebição de conteúdo, dessa forma, só serão renderizados os elementos que estão sendo 
  //visíveis no monitor.
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style} >
        <ProductItem
          onAddToWishList={onAddToWishList}
          product={results[index]}
        />
      </div>
    )
  }

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List 
        height={300}
        rowHeight={30}
        width={500}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
