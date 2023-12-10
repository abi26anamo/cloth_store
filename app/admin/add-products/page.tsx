import { getCurrentUser } from '@/actions/getCurrentUser'
import { Container } from '@mui/material'
import React from 'react'
import AddProductForm from './AddProductForm';
import FormWrapper from '@/app/components/FormWrapper';
import NullData  from '@/app/components/NullData';
const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== 'ADMIN') {
    return  <NullData title='Oops! Access Denied'/>
  }

  return (
    <div className='p-8'>
      <Container>
        <FormWrapper>
          <AddProductForm/>
        </FormWrapper>
      </Container>
    </div>
  )
}

export default AddProducts;