import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeMovieQueryComponent from './Components/HomeMovieComponent/MovieQueryComponent'
import LoginComponent from './Components/LoginComponent/LoginComponent'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginComponent/>}></Route>
      <Route path="/Movies" element={<HomeMovieQueryComponent/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
