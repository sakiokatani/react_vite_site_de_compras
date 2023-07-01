import './App.css'
import InformacoesPessoais from './components/informacoes_pessoais'
import Header from './components/Header'
import ProductCard from './components/Product-card'
import Button from './components/Button'

function App() {

  const header={
    prop1: "Produtos",
    prop2: "Contato",
    prop3: "FAQ",
    prop4: "Minha Empresa"
  }
  

  return (

      <div>
        <div className='header-container'>
          <Header className="p-5" prop4= {header.prop4} prop1={header.prop1} prop2={header.prop2} prop3={header.prop3} />
        </div>
        <div className='body-container'>
          <ProductCard/>
        </div>
      </div>
  )
}

export default App;
