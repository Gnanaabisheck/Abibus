import React, { useContext, useRef } from 'react'
import { newContext } from '../App'
import { Link, useParams } from 'react-router-dom'
import { Buses } from './Buses'
import { LuArmchair } from "react-icons/lu";
import { GiSteeringWheel } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
import { TbSofa } from "react-icons/tb";
import { Container, Table } from 'react-bootstrap';
import './Travel.css'


const SeatLayout = () => {
    const{selectedSeats,setSelectedSeats}=useContext(newContext)

    function handleSelected(item){
     setSelectedSeats((previous)=>previous.includes(item) ? previous.filter((data)=>data!==item):[...previous,item])
    
     

    
    }

    const {id}=useParams()
    const selectedBuses=Buses.find((data)=>data.id===id)
    localStorage.setItem('id',JSON.stringify(selectedBuses.id))


    function handleProceed(){
      localStorage.setItem('price',JSON.stringify(selectedBuses.price))
    }
  return (
    <div className='text-center'>
       <Container className='m-auto'>
       <Table className='  my-4 py-4 ' bordered variant='success '>
        <tbody>
          <tr>
            <th>
              Bus Name 
            </th>
            <td>
              {selectedBuses.name}
            </td>
          </tr>
          <tr>
            <th>
              Arrival Time
            </th>
            <td>
              {selectedBuses.arrivaltime}
            </td>
          </tr>
          <tr>
            <th>
              Departure Time 
            </th>
            <td>
              {selectedBuses.departuretime}
            </td>
          </tr>
          <tr>
            <th>
              Price  
            </th>
            <td>
              Rs : {selectedBuses.price}
            </td>
          </tr>
          
          <tr>
            <th>
              Source 
            </th>
            <td>
              {selectedBuses.source}
            </td>
          </tr>
          <tr>
            <th>
              Destination 
            </th>
            <td>
              {selectedBuses.destination}
            </td>
          </tr>
          <tr>
            <th>
              Type 
            </th>
            <td>
              {selectedBuses.bustype}
            </td>
          </tr>
        </tbody>
       </Table>

       <div className="seat-view my-5" style={{display:'flex',margin:'auto' ,justifyContent:'center'}}>
        <div className="not-selected mx-5">
        <LuArmchair id='seat-icon' />
        <p>
          Not Selected Seats 
        </p>
        </div>
        <div className="selected mx-5">
        <LuArmchair id='seat-icon' style={{backgroundColor:'lightgreen'}}/>
        <p>
          Selected Seats 
        </p>
        </div>

       </div>
       <span className='text-center'> {selectedSeats.length >0 && <h3>Selected Seats</h3>}</span>
       {selectedSeats.map((item,i)=>(
        <button style={{margin:'10px 20px'}} className=' btn btn-success' key={i}>
           {item}
        </button>
       ))}
     
       
       <br />
       <br />
       {selectedBuses.bustype==='Seater' ? ( <div className="structure">

        
      <div className="drivers">
        <TbSofa id='seat-icon'/> 
        <GiSteeringWheel id='seat-icon'/>
        </div>
       <div className="first">
       
       <div className="one" >
      
       {selectedBuses.seatlayout.lower.first[0].map((item,i)=>(
        
       <div className="seats" key={i}>
       
         <LuArmchair id='seat-icon'  style={{backgroundColor:selectedSeats.includes(item)? "lightgreen":'white'}} onClick={()=>handleSelected(item)} /> 
         <p>{item}</p>
        
       </div>
       ))}
       </div>

      <div className="two">
      {selectedBuses.seatlayout.lower.first[1].map((item,i)=>(
        
        <div className="seats" key={i}>
        <LuArmchair id='seat-icon' style={{backgroundColor:selectedSeats.includes(item)? "lightgreen":'white'}} onClick={()=>handleSelected(item)}  /> 
        <p>{item}</p>
      </div>
       
       ))}
       {selectedBuses.seatlayout.lower.second.map((item,i)=>
        
       {

      
        return ( <div className="seats" key={i}>
          
        <LuArmchair id='seat-icon' style={{backgroundColor:selectedSeats.includes(item)? "lightgreen":'white'}}  onClick={()=>handleSelected(item)}/> 
        <p>{item}</p>
      </div>)
       }
       
       )}
       </div>
      </div>
      
      </div>
) :  <div className="structure">
<div className="drivers">
  <TbSofa id='seat-icon'/> 
  <GiSteeringWheel id='seat-icon'/>
  </div>
 <div className="first">
 
 <div className="one">

 {selectedBuses.seatlayout.lower.first[0].map((item,i)=>(
 <div className="seats" key={i}>
   <LiaBedSolid id='seat-icon' onClick={()=>handleSelected(item)}  style={{backgroundColor:selectedSeats.includes(item)?"lightgreen":'white'}}/> 
   <p>{item}</p>
  
 </div>
 ))}
 </div>

<div className="two">
{selectedBuses.seatlayout.lower.first[1].map((item,i)=>(
  
  <div className="seats" key={i}>
  <LiaBedSolid id='seat-icon' onClick={()=>handleSelected(item)}
  style={{backgroundColor:selectedSeats.includes(item)?"lightgreen":'white'}}/> 
  <p>{item}</p>
</div>
 
 ))}
 {selectedBuses.seatlayout.lower.second.map((item , i)=>(
  
  <div className="seats" key={i}>
 <LiaBedSolid id='seat-icon' onClick={()=>handleSelected(item)}  style={{backgroundColor:selectedSeats.includes(item)?"lightgreen":'white'}}/>
  <p>{item}</p>
</div>
 
 ))}
 
 </div>
</div>


</div>
}
{selectedSeats.length >0 && <Link to='/bookingpage'><button className='btn btn-primary my-5 me-auto' onClick={handleProceed}>Proceed To The Next Step </button></Link>}

       </Container>
     
    </div>
  )
}

export default SeatLayout