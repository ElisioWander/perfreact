import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

//pegando os resultados um por um atraves do MAP e enviando para o component
//que irá ser responsábel pela renderização do produto
export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
            <ProductItem product={product} key={product.id} />
        )
      })}
    </div>
  );
}
