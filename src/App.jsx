import './App.css'
import InformacoesPessoais from './components/informacoes_pessoais'
import Header from './components/Header'
import ProductCard from './components/Product-card'
import MenuBar from './components/menubar'

function App() {

  const header={
    prop1: "Iniciar sessão",
    prop2: "Favoritos",
    prop3: "Carrinho",
    prop4: "REhobby "

    //- REUSE, reattempt, rehobby
  }
   const menu={
    prop1: "Tapeçaria",
    prop2: "Papelaria",
    prop3: "Crochet & Tricot",
    prop4: "Modelos eletronicos",
    prop5: "Pintura"
   }

  return (

      <div>
        <div className='header-container'>
          <Header className="p-5" prop4= {header.prop4} prop1={header.prop1 } prop2={header.prop2} prop3={header.prop3} />
          <div className='menubar-container'>
            <MenuBar prop1={menu.prop1} prop2={menu.prop2} prop3={menu.prop3} prop4={menu.prop4} prop5={menu.prop5}/>
          </div>
        </div>
        <div className='body-container'>
          <ProductCard/>
        </div>
      </div>
  )
}

export default App;
