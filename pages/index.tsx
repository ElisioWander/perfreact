import { FormEvent, useState } from "react"
import { SearchResults } from "../components/SearchResults";

type results = Array<{
  id: number;
  price: number;
  title: string;
}>

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<results>([]) //um array de produtos

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }

    //chamada a API para pegar os dados enviado o valor do estado
    //como parâmetro de busca
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    //salvar os resultados da busca em um estado
    setResults(data)
    console.log(results)
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

      <SearchResults results={results} />
    </div>
  )
} 