import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import {
  ConnectButton,
  Icon,
  TabList,
  Tab,
  Button,
  Modal,
  useNotification,
} from 'web3uikit'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState()
  const [myMovies, setMyMovies] = useState([])
  const { isAuthenticated, Moralis, account } = useMoralis()

  const dispatch = useNotification()

  const handleNewNotifi = () => {
    dispatch({
      type: 'error',
      message: 'please connect your wallet',
      title: 'not authenticated',
      position: 'topL',
    })
  }

  return (
    <>
    </>
  )
}

export default Home
