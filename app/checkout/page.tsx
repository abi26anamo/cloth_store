import { Container } from '@mui/material'
import React from 'react'
import CheckOutClient from './CheckOutClient'

const Checkout = () => {
  return (
      <div className='p-8'>
          <Container>
              <CheckOutClient/>
          </Container>
    </div>
  )
}

export default Checkout