import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
 import { toast } from 'react-toastify';
 import { useRouter } from 'next/router';


const Register = () => {
   
  const router = useRouter()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState('man');
  const [process, setProcess] = useState(false)
  const [selectedAge, setSelectedAge] = useState('')
  const [experiences, setExperiences] = useState('yes')

  const data = {name, email, selectedValue, selectedAge, experiences}

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

    if(name === '') {
      toast.error('Please provide Name!')
      return 
    }

    if(email === '') {
     toast.error('Please provide email!')
     return
    }

    if(selectedAge === '') {
      toast.error('Please select Age!')
      return
    }

    console.log(data)
  
  // config
  const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
  
  try {
    setProcess(true)
    const res = await axios.post('/api/contact', data, config);
    console.log(res.data)
    toast.success(res.data.message)
    
    setProcess(false)
   
  } catch (error) {
    console.error('Registration failed:', error);
    setProcess(false)
  }   
};


 const handleRadioChange = event => {
        setSelectedValue(event.target.value);
    }

  const handleSelectChange = (event) => {
        setSelectedAge(event.target.value);
    }

  const handleExperiences = (event) => {
        setExperiences(event.target.value);
    }


  return (

    <>
      <h3 className="mt-5 text-center">Contact Form</h3>
      <p className='text-center lead mb-5'>
        Hoping to hear from you in the near future.
      </p>

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

       <div className='d-flex justify-content-between mx-2'>
         <p>Man / Woman</p>
         <p>Experience with dogs</p>
       </div>

       {/* radio btns */}
       <div className='d-flex justify-content-between mx-2'>
          {/**************************** man/women */}
          <div>
            
              <div className="form-check">
                    <input className="form-check-input"
                          type="radio"
                          name="man"
                          id="exampleRadios1"
                          value="man"
                          checked={selectedValue === 'man'}
                          onChange={handleRadioChange}/>
                    <label className="form-check-label"
                          htmlFor="exampleRadios1">
                        Man
                    </label>
              </div>

              <div className="form-check">
                  <input className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="woman"
                          checked={selectedValue === 'woman'}
                          onChange={handleRadioChange}/>
                  <label className="form-check-label"
                          htmlFor="exampleRadios2">
                      Woman
                  </label>
              </div>
          </div>

          {/*************************** experiences */}
          <div>
              <div className="form-check">
                    <input className="form-check-input"
                          type="radio"
                          name="experiences"
                          id="exampleRadios3"
                          value="yes"
                          checked={experiences === 'yes'}
                          onChange={handleExperiences}/>
                    <label className="form-check-label"
                          htmlFor="exampleRadios3">
                        Yes
                    </label>
              </div>

              <div className="form-check">
                  <input className="form-check-input"
                          type="radio"
                          name="experiences"
                          id="exampleRadios4"
                          value="no"
                          checked={experiences === 'no'}
                          onChange={handleExperiences}/>
                  <label className="form-check-label"
                          htmlFor="exampleRadios4">
                      No
                  </label>
              </div>
          </div>
       </div>
    
      {/* select age */}
        <select className="form-select mt-3" aria-label="Default select example" value={selectedAge} onChange={handleSelectChange}>
          <option value="">Your Age</option>
          <option value="20">18-25</option>
          <option value="30">26-40</option>
          <option value="45">41-55</option>
        </select>
                    
      

        <button type="submit" 
                disabled={process}
                className="btn btn-primary w-100 rounded-1 mt-5">
          { process ? 'Processing' : 'Submit'}
        </button>

      </form>


      <Link href={'/'}
            className='btn btn-primary rounded-1 vstack my-5 mx-auto'
            style={{textDecoration: 'none', width: '200px'}}>
        Go Back
      </Link>



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