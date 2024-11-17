import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/Layout/Header'
import Footer from './assets/Layout/Footer'
import Home from './assets/Pages/Home'
import Products from './assets/Pages/Products'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import Cart from './assets/Pages/Cart'

function App() {

  return (
    <BrowserRouter
    
    >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
