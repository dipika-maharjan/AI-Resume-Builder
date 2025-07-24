import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SigninPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <SignIn/>
      
    </div>
  )
}

export default SigninPage
