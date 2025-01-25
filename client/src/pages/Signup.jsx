import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20 '>
        <div className='flex p-3 max-w-3xl  mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* left */}
          <div className='flex-1'>
              <Link to="/" className=' font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white'>CodeLink</span>
                LK
              </Link>
              <p className='text-sm mt-5 '>
                You can sign up with your email and password or With Google
              </p>
          </div>
          {/* right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4'>
                <div>
                    <Label value='Your Username'></Label>
                    <TextInput type="text" placeholder='Username' id='username'></TextInput>
                </div>
                <div>
                    <Label value='Your Email'></Label>
                    <TextInput type="text" placeholder='name@gmail.com' id='Email'></TextInput>
                </div>
                <div>
                    <Label value='Your Password'></Label>
                    <TextInput type="text" placeholder='Password' id='Password'></TextInput>
                </div>
                <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
            </form>
             <div className='flex gap-2 text-sm mt-5'> <span>Have an account </span><Link to='/signin' className='text-blue-500'> Sign in</Link></div>
          </div>
        </div>
    </div>
  )
}

export default Signup
