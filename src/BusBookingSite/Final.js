import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Final = () => {
    const navigate=useNavigate()
  return (
    <div>
        <Container>
            <div className="icon text-center mt-5">
                <FaCircleCheck className=' text-success my-3' style={{fontSize:'90px'}}/>
                <h3 style={{lineHeight:'50px'}} className='text-muted'>
                    Your Ticket Booked Successfully Thanks For Visiting
                    <br />
                     Do you Like to Book a Return Ticket 
                     <br />

                     <Button className='btn btn-primary' onClick={()=>navigate('/')}> Book a Return Ticket </Button>
                </h3>
            </div>
        </Container>
    </div>
  )
}

export default Final