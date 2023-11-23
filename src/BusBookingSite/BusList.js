import React, { useContext } from 'react'
import { newContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import bus from '../Images/bus.png'
import { ImSad2 } from "react-icons/im";

const BusList = () => {
    const{filterdBuses}=useContext(newContext)
    const navigate=useNavigate()
  return (
    <div>
       
    <Container className='mt-5'>
      
       
        {filterdBuses.length>0 ? (
         
         filterdBuses.map((item,i)=>{
             return (
                <Row className='bus-row' key={item.id}>

                  <Col md={6} className='mt-5'>
                  <Image src={bus} fluid/>
                  </Col>
                  <Col>
                  <div className="all">
               
               <div className='box' key={i}>
                 <Table bordered variant='primary'>
                  <tbody >
                    <tr>
                    <th className='py-3'>
                      Bus Name
                    </th>
                    <td className='py-3'>
                      {item.name}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Source
                    </th>
                    <td className='py-3'>
                      {item.source}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Destination
                    </th>
                    <td className='py-3'>
                      {item.destination}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Departure Time
                    </th>
                    <td className='py-3'>
                      {item.departuretime}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Arrival Time
                    </th>
                    <td className='py-3'>
                      {item.arrivaltime}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Price
                    </th>
                    <td className='py-3'>
                      Rs : {item.price}
                    </td>
                    </tr>
                    <tr>
                    <th className='py-3'>
                      Type
                    </th>
                    <td className='py-3'>
                      {item.bustype}
                    </td>
                    </tr>
                    
                  </tbody>
                 </Table>
                 <Link to={`/seatlayout/${item.id}`}>
                 <button className='btn btn-success mt-2 my-3 w-100'>
                    View Seats
                  </button>
                 </Link>
              </div>
             </div>
                  </Col>
                </Row>
                

 
             )
         })) : <div className="no text-center" >
          <h2 className='text-center my-5 fs-1 pt-5'> Sorry No Buses Available for the Selected City  <ImSad2 className='fs-1 text-warning'/></h2>

         <Link to='/'>
         <button className='btn btn-primary p-2'>
            Go Back
          </button>
         </Link>
         </div> }
        
      
    </Container>
            
    </div>
  )
}

export default BusList