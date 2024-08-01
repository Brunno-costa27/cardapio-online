import {Home} from './Pages/Home'
import {Cart} from './Pages/Cart'
import {Favorites} from './Pages/Favorites'
import {Order} from './Pages/Order'
import Layout from './Pages/Layout'

import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
function App() {
  
  const Products = [
    {
      img: 'https://img-server-opal.vercel.app/uploads/pizza01.jpg',
      title: 'FRANGO COM CATUPIRY',
      description: 'Molho, frango, catupiry, cebola, tomate, azeitonas e orégano',
      price: 20,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/pizza02.jpg',
      title: 'FRANGO COM CHEDDAR',
      description: 'Molho, frango, cheddar, cebola, tomate, azeitonas e orégano',
      price: 50,


    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/pizza03.jpg',
      title: "FRANGO COM MUSSARELA",
      description: 'Molho, frango, mussarela, cebola, tomate, azeitonas e orégano',
      price: 90,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/pizza04.jpg',
      title: 'FRANGO COM BACON',
      description: 'Molho, frango, mussarela, bacon, milho, cebola, tomate, azeitonas e orégano',
      price: 30,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/pizza05.jpg',
      title: 'FRANGO COM 3 QUEIJOS',
      description: 'Molho, frango, mussarela, catupiry, cheddar, cebola, azeitonas e orégano',
      price: 99,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/guarana.png',
      title: 'GUARANÁ ANTARCTICA',
      description: ' 1L',
      price: 8,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/guarana.png',
      title: 'GUARANÁ ANTARCTICA',
      description: ' 2L',
      price: 12,

    },
    {
      img: 'https://img-server-opal.vercel.app/uploads/coca-cola.png',
      title: 'COCA COLA',
      description: '2L',
      price: 12,

    },
    {
      img: "https://img-server-opal.vercel.app/uploads/coca-cola.png",
      title: 'COCA COLA',
      description: '1L',
      price: 8,

    },
  ]


  return (
    <Router>
        <div className=''>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home products={Products} />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
            </Route>
          </Routes>
        </div>
    </Router>
  )
}

export default App