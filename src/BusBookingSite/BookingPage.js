import React, { useContext } from 'react'
import { newContext } from '../App'
import { Badge, Button, Container, Form, FormControl, FormSelect, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navi2=useNavigate()


  function handleBack(){
    const newId=JSON.parse(localStorage.getItem('id'))
    navi2(`/seatlayout/${newId}`)
  }

  const priceData=JSON.parse(localStorage.getItem('price'))
  const navigate=useNavigate()
  const nav=useNavigate()
    const {selectedSeats,setSelectedSeats,empty,setEmpty,selectedBuses} = useContext(newContext)

    function handleSel(){
     

      if(empty.name=='' || empty.email =='' || empty.mobno =='')
      {
       alert(`The input field will not be empty if the input fileds is empty the give data will be erased`) 
       navi2('/bookingpage')
      
      }
      else
      {
        nav('/final')
        setSelectedSeats([])
      }


      console.log(empty);
    }

    
    
  return (
    <div>
          <Container>
         <Form>
         <Table variant='success'>
          <thead>
            <tr>
              <th colSpan={3} className='text-center'>
                Registration Page 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='text-center'>
                Enter Name <span className='text-danger'> * </span>
              </th>
              <td >
                <FormControl id='input' value={empty.name} 
                
                onChange={(e)=>setEmpty((prev)=>({...prev,name:e.target.value}))}
                
                />
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Enter Email Id <span className='text-danger'> * </span>
              </th>
              <td >
                <FormControl id='input' type='email'
                onChange={(e)=>setEmpty((prev)=>({...prev,email:e.target.value}))}
                />
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Enter Mobile Number <span className='text-danger'> * </span>
              </th>
              <td >
                <FormControl id='input' type='number'
                onChange={(e)=>setEmpty((prev)=>({...prev, mobno : e.target.value}))}
                />
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Enter Alternate Mobile Number
              </th>
              <td >
                <FormControl id='input' type='number'/>
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Select Goverment Issued ID Card
              </th>
              <td >
                <FormSelect id='input'>
                  <option value="">
                    Aadhar Card
                  </option>
                  <option value="">
                    Driving License
                  </option>
                  <option value="">
                    PAN Card
                  </option>
                  <option value="">
                    Passport
                  </option>
                </FormSelect>
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Selected Seats
              </th>
              <td >
                {selectedSeats.map((item,i)=>(
                  <Badge className='bg-danger m-3 fs-6' key={i}>
                    {item}
                  </Badge>
                ))}
              </td>
            </tr>

            <tr>
              <th className='text-center'>
                Total Cost 
              </th>
              <td>
                {priceData * selectedSeats.length}
              </td>
            </tr>
            <tr>
              <th className='text-center'>
                Number of seats selected
              </th>
              <td>
                    {selectedSeats.length}
              </td>
            </tr>
             
            <tr>
              <td colSpan={3} className='text-center'>

              <button className='btn btn-success mx-3' onClick={handleBack}> Go Back </button>

                <button className='btn btn-primary mx-3' onClick={handleSel}> Proceed </button>

               
              </td>
            </tr>
          </tbody>
           </Table>
         </Form>
          </Container>
    </div>
  )
}

export default BookingPage