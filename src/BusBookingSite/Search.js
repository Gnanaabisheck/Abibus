import React, { useContext, useState } from 'react'
import { Buses, Cities } from './Buses'
import { newContext } from '../App';
import banner from '../Images/rydePop.svg'
import { Container, Image,Row,Col, FormControl, FormSelect, FormLabel } from 'react-bootstrap';



const Search = () => {
   
    const {searchState,setSearchState,filterdBuses,setFilterdBuses,handleClick} = useContext(newContext)
    
  
       
    
  return (
    <div>
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                <div className="form">
        <h5 className='bg-primary p-3 border-rounded text-white'>
            Search For Buses
        </h5>
        <div style={{display:'flex', justifyContent:'space-between',marginTop:'30px'}}>
        <FormLabel className='fw-bold'>
            From
        </FormLabel>
       <FormSelect  className='w-75' value={searchState.from} id='input' onChange={(e)=>setSearchState((prevState)=>({
        ...prevState,from:e.target.value
       }))}>

        {Cities.map((data)=>(
            <option value={data} key={data}>
                {data}
            </option>
        ))}
       </FormSelect>
        </div>
      
       <div style={{display:'flex', justifyContent:'space-between',marginTop:'30px'}}>
       <FormLabel className='fw-bold'>
            Destination
        </FormLabel>
       <FormSelect value={searchState.to} className='w-75 ' id='input' onChange={(e)=>setSearchState((prevState)=>(
        {...prevState,to: e.target.value}
       ))}>

        {Cities.map((data)=>(
            <option value={data} key={data}>
                {data}
            </option>
        ))}
       </FormSelect>
       </div>
       <div style={{display:'flex', justifyContent:'space-between',marginTop:'30px'}}>
       <FormLabel className='fw-bold'>
            Date of Journey
        </FormLabel>
       <FormControl id='input' className='w-75'  type="date" 
       value={searchState.date}
       onChange={(e)=>setSearchState((prevState)=>({
        ...prevState,date:e.target.value
       }))}
       />
   </div>
       <button className='btn btn-primary my-4'    onClick={handleClick}>
        Search
       </button>
       <br/>
       <br/>
       <br/>


      
        
                </div>
                </Col>
                <Col md={6}>
                <Image src={banner} fluid/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Search