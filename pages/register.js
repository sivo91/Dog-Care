import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
 import { toast } from 'react-toastify';
 import { useRouter } from 'next/router';


const Register = () => {
   
  const router = useRouter()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false)
  const [process, setProcess] = useState(false)



// input background
 const myFunc = (element) => {
    if (element) {
      // Do something with the element when it receives focus
      element.style.backgroundColor = '#f2f2f2';
    }
  };


  // onsubmit func
const handleSubmit = async (e) => {
    e.preventDefault();
   

   // if password match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      toast.error(`Password don't math!`)
      return;
    } else {
      setPasswordMatchError(false);
    }
 
  // config
  const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
  
  try {
    setProcess(true)
    const userData = { name, email, password }; 
    console.log(userData)
    const res = await axios.post('/api/user/register', userData, config);
    console.log(res.data)
    toast.success(res.data.message)
    
    setTimeout(() => {
      router.push('/login')
    },500)

    setProcess(false)
   
  } catch (error) {
    console.error('Registration failed:', error);
    console.log(error.response.data.message)
    toast.error(error.response.data.message)
    setProcess(false)
  }  
};




  return (

    <>
      <h3 className="my-5 text-center">Register</h3>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" 
                 className="form-control" 
                 id="name" 
                 value={name}
                 onFocus={(e) => myFunc(e.currentTarget)}
                 onChange={ e => setName(e.target.value)}
                 placeholder="Enter your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" 
                 className="form-control" 
                 id="email" 
                 value={email}
                 onFocus={(e) => myFunc(e.currentTarget)}
                 onChange={ e => setEmail(e.target.value)}
                 placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" 
                 className="form-control" 
                 id="password" 
                 value={password}
                 onFocus={(e) => myFunc(e.currentTarget)}
                 onChange={ e => setPassword(e.target.value)}
                 placeholder="Enter your password" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirm
          </label>
          <input type="password" 
                 className="form-control" 
                 id="confirm" 
                 value={confirmPassword}
                 onFocus={(e) => myFunc(e.currentTarget)}
                 onChange={ e => setConfirmPassword(e.target.value)}
                 placeholder="Confirm your password" />
        </div>

        <button type="submit" 
                disabled={process}
                className="btn btn-primary w-100 rounded-1 my-3">
          { process ? 'Processing' : 'Submit'}
        </button>

        <hr />

       <div className='text-center'>
         <Link href={'/login'} 
              style={{textDecoration: 'none'}}>
           Login
         </Link>
       </div>
        

        {passwordMatchError && (
          <p className="text-danger mt-3">Passwords do not match!</p>
        )}

      </form>




    

      <style jsx>{`
        form {
          position: relative;
          width : 400px;
          margin: 0 auto;
          border: 1px solid gray;
          padding: 40px;
          border-radius: 7px;
          background-color: white;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Register;