import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults/SearchResults";
import { Container, SearchButton } from "./style";

type Data = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
}

interface Results {
  totalPrice: number;
  data: Data[]
}



export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  }) //um array de produtos

  const addToWishList = useCallback((id: number) => {
    console.log(id)
  }, [])


  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }

    //chamada a API para pegar os dados enviado o valor do estado
    //como parâmetro de busca
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    //sempre que possível, para obter uma melhor performace, fromate os dados no momento
    //em que eles foram buscados e não nos componentes que irão exibilos. Dessa forma evita-se
    //o uso desnecessário de metodos como o memo, useMemo,useCallback.
    const products = data.map((product: Data) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })

    const totalPrice = data.reduce((total: number, product: {price: number}) => {
      return total + product.price
    }, 0)


    //salvar os resultados da busca em um estado
    setResults({totalPrice, data: products})
  }

  return (
    <Container>
      <h1>Search</h1>

      <form onSubmit={handleSearch} >
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
        <SearchButton type="submit">
          Search  
        </SearchButton>
      </form>

      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishList={addToWishList} />
    </Container>
  )
} 