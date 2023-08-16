import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'
import SignIn from './pages/SignIn.tsx'
import Cart from './pages/Cart.tsx'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV !== 'development' ? '/' : 'http://localhost:5000'

console.log(axios.defaults.baseURL)
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index={true} element={<Home />} />
    <Route path='product/:slug' element={<Product />} />
    <Route path='sign-in' element={<SignIn />} />
    <Route path='cart' element={<Cart />} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
