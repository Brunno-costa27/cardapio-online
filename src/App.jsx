import { Home } from './Pages/Home'
import {Cart} from './Pages/Cart'
import {Favorites} from './Pages/Favorites'
import {Order} from './Pages/Order'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import foto7 from './assets/foto7.jpg'
import foto8 from './assets/foto8.jpg'

//side bar
import Sidebar from './components/Sidebar'
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from 'react-router-dom'
function App() {

  console.log(foto1)

  const Products = [
    {
        img: foto1,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 20
    },
    {
        img: foto2,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 50
    },
    {
        img: foto3,
        title: "Frango com catupiry",
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 90
    },
    {
        img: foto4,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 30
    },
    {
        img: foto5,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 99
    },
    {
        img: foto6,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 80
    },
    {
        img: foto7,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 40
    },
    {
        img: foto8,
        title: 'Frango com catupiry',
        description: 'Molho de tomate italiano, Catupiry e orégano.',
        price: 40
    },

]


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home products={Products}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favorites/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Route>
    )
  )
  return (
    <div className="">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
    <div className=''>
      <Sidebar/>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
    
  )
}