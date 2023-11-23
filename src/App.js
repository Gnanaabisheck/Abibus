import React, { createContext, useState } from 'react'
import Header from './BusBookingSite/Header'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Search from './BusBookingSite/Search'
import { Buses, Cities } from './BusBookingSite/Buses'
import BusList from './BusBookingSite/BusList'
import SeatLayout from './BusBookingSite/SeatLayout'
import BookingPage from './BusBookingSite/BookingPage'
import Final from './BusBookingSite/Final'
export const newContext = createContext(null)
const App = () => {
  

  const navigate=useNavigate()
  const [empty,setEmpty]=useState({
    name:'',
    email:'',
    mobno:''
  })
 const[selectedSeats,setSelectedSeats]=useState([])
  const[searchState,setSearchState]=useState(
    {
    from:Cities[0],
    to:Cities[2],
    date:''
    }
  )
  const[filterdBuses,setFilterdBuses]=useState('')
    function handleClick(){
        setFilterdBuses(Buses.filter((bus)=>bus.source===searchState.from && bus.destination===searchState.to && bus.availabledates.includes(searchState.date)))
          navigate('/buslist')
    }

    
  return (
    <div>
      <Header/>
     <newContext.Provider value={{searchState,setSearchState,filterdBuses,setFilterdBuses,handleClick,selectedSeats,setSelectedSeats,empty,setEmpty}}>
     <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/buslist' element={<BusList/>}/>
        <Route path='/seatlayout/:id' element={<SeatLayout/>}/>
        <Route path='/bookingpage' element={<BookingPage/>}/>
        <Route path='/final' element={<Final/>}/>

      </Routes>
     </newContext.Provider>

    
     
       
    </div>
  )
}

export default App