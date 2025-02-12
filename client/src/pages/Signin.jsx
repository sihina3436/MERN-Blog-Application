
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

const Signin = () => {

  const [formData,setFormData] = useState({});
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange  = (e) =>{
    // console.log(e.target.value);
    setFormData({...formData,[e.target.id]:e.target.value.trim()});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending login data:", formData); // Debugging log
  
    if( !formData.email || !formData.password){
      return setErrorMessage("Please fill all fields.");
    }
  
    try {
      setLoading(true);
      setErrorMessage(null);
      
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Signin response:", data);
  
      if (!response.ok) {
        console.log("Signip failed:", data.message);
        return setErrorMessage(data.message || "Invalid email or password.");
      }
  
      setLoading(false);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
  
      console.log("User logged in:", data.user.username);
  
      // Redirect to homepage or dashboard
      navigate('/');

    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };
  
  

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
                You can sign in with your email and password or With Google
              </p>
          </div>
          {/* right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                {/* <div>
                    <Label value='Your Username'></Label>
                    <TextInput type="text" placeholder='Username' id='username' onChange={handleChange}></TextInput>
                </div> */}
                <div>
                    <Label value='Your Email'></Label>
                    <TextInput type="text" placeholder='name@gmail.com' id='email'  onChange={handleChange}></TextInput>
                </div>
                <div>
                    <Label value='Your Password'></Label>
                    <TextInput type="text" placeholder='*******' id='password'  onChange={handleChange}></TextInput>
                </div>
                <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>{loading ? (<>
                  <Spinner size='sm'/><span className='pl-3'>Loading...</span></>
                ) : "Sign in" }</Button>
            </form>
             <div className='flex gap-2 text-sm mt-5'> <span>Dont have an account? </span><Link to='/signup' className='text-blue-500'> Sign up</Link></div>
             {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
             }
          </div>
        </div>
    </div>
  )
}

export default Signin
