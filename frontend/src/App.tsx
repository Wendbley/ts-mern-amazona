import { sampleProducts } from "./data"


function App() {
  

  return (
    <>
      <header>
        TS Amazona
      </header>
      <main>
        <ul>
          {sampleProducts.map(product => (
            <li key={product.slug}>
              <img src={product.image} alt={product.name} className="product-img" />
              <h2>{product.name}</h2>
              <p>R{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        All rights Reseved
      </footer>
    </>
  )
}

export default App
