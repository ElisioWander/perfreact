import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults";

interface Results {
  totalPrice: number;
  data: Array<{
    id: number;
    price: number;
    title: string;
  }>
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

    const totalPrice = data.reduce((total: number, product: {price: number}) => {
      return total + product.price
    }, 0)


    //salvar os resultados da busca em um estado
    setResults({totalPrice, data})
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch} >
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
        <button type="submit">
          Search  
        </button>
      </form>

      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishList={addToWishList} />
    </div>
  )
} 