import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./views/Home"
import Upload from "./views/Upload"
import CreateClass from './views/CreateClass'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/create-class" element={<CreateClass />} />
      </Routes>
    </BrowserRouter>
  )
}