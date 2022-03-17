
import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from '../ProductItem/ProductItem';
import { Container, ListContent } from "./style";

interface SearchResultsProps {
  totalPrice: string;
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

  // const formattedTotalPrice = {
  //   totalPrice: new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL'
  //   })
  // }

  return (
    <Container>
        <h2>Total: </h2>
        <h3>{totalPrice}</h3>

        <ListContent>
          <List 
            height={270}
            rowHeight={30}
            width={600}
            overscanRowCount={5}
            rowCount={results.length}
            rowRenderer={rowRenderer}
            
          />
        </ListContent>
    </Container>
  );
}
