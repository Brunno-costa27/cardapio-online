
import './App.css'
import { ProductList } from './components/ProductList';

function App() {


  const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 10,00' },
    { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 'R$ 20,00' },
    // Adicione mais produtos conforme necessário
];
  return (
    <ProductList products={products}/>
  )
}

export default App
