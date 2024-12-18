import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipeDetails from './pages/RecipeDetails'
import AllCategories from './components/AllCategories'
import Recipes from './components/Recipes'


function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  );
}




function App() {
 
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout/> } >
          <Route index element={<Home/>} />
          <Route path='/' element={<AllCategories/>}/>
          <Route path = '/recipes/:category' element={<Recipes/>}/>
          <Route path='recipe/:id' element = {<RecipeDetails/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
