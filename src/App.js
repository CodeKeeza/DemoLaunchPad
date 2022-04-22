import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Hero from './components/ICOForm'
import ICOForm from './components/ICOForm'

function App() {
  return (
    <>
      <Header />
      <ICOForm />
      <BottomNav />
    </>
  )
}

export default App
