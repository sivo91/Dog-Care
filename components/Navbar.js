import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userLogin, userLogOut } from '@/reduxFile/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';



const Navbar = () => {

const { user } = useSelector((state) => state.userAuth)
//console.log(user)

 const dispatch = useDispatch()
 const router = useRouter()

const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;



 // close navbar ul
 const handleNavbar = () => {
   const navbarToggler = document.getElementById('navbarNavDropdown')
   navbarToggler.className = 'collapse navbar-collapse'
 }



const handleLogOut = async () => {
  try {
    
    const res = await axios.get('/api/user/logout')
    if(res.data.success === true) {
     dispatch(userLogOut())
    }

      handleNavbar()
  } catch (error) {
    console.log(error)
  }
}





useEffect(() => {
    if (typeof window !== 'undefined') {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
}, []);





  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid mx-3">
       
        <Link href={'/'} 
              onClick={handleNavbar}
              className="navbar-brand">
          Dog Care
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">

          <ul className="navbar-nav">

           
           {
              user !== null && innerWidth < 990 && (
                  <>
                      <li onClick={handleNavbar} className="nav-item">
                          <Link href={'/profile'} className="nav-link">
                              Profile
                          </Link>
                      </li>
                  </>
              )
          }

            
            <li onClick={handleNavbar} className="nav-item">
              <Link href={'/ocko'} className="nav-link">
                  Ochko
              </Link>
            </li>

            <li onClick={handleNavbar} className="nav-item">
              <Link href={'/shadow'} className="nav-link">
                  Shadow
              </Link>
            </li>

           

            <li onClick={handleNavbar} className="nav-item">
              <Link href={'/contact'} className="nav-link">
                  Contact
              </Link>
            </li>

            {/* mobile devices */}

            { user === null ? (
               <>
                <div className='w-100 d-flex mt-4 mb-2 justify-content-around mobileLogin'>

                    <Link href={'/login'}
                          onClick={handleNavbar}
                          className='btn btn-primary rounded-1 px-5 navLogBTN'
                          style={{textDecoration:'none'}}>
                      Login
                    </Link>

                    <Link href={'/register'}
                          onClick={handleNavbar}
                          className='btn btn-primary rounded-1 px-5 navLogBTN'
                          style={{textDecoration:'none'}}>
                      Register
                    </Link>
                  </div>
               </>
               ) : (
              <>
                 <div className='w-100 d-flex mt-4 mb-2 justify-content-around mobileLogin'>

                    <Link href={'/logout'}
                          onClick={ () => handleLogOut()}
                          className='btn btn-primary rounded-1 px-5 navLogBTN'
                          style={{textDecoration:'none'}}>
                      Log Out
                    </Link>
                  </div>
              </>
               ) 
            }

              

             



          </ul>

        </div>

         <div className="nav-item btn btn-light dropdown" id='menu'>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id='a-link'
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>

               {
                user === null ? (
                  <>
                    <ul className="dropdown-menu" id='menu-ul'>
                      <li onClick={handleNavbar}>
                        <Link href={'/login'} className="dropdown-item">
                          Login
                        </Link>
                      </li>
                      <li onClick={handleNavbar}>
                        <Link href={'/register'} className="dropdown-item">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <> 
                      <ul className="dropdown-menu" id='menu-ul'>
                        <li onClick={handleNavbar}>
                          <Link href={'/profile'} className="dropdown-item">
                            Profile
                          </Link>
                        </li>

                        <li onClick={handleNavbar}>
                          <Link href={'/'} className="dropdown-item">
                            Some page here
                          </Link>
                        </li>

                        <li onClick={ () => handleLogOut()}>
                          <Link href={'/logout'}       className="dropdown-item">
                            Log Out
                          </Link>
                        </li>
                      </ul>
                   </>
                )
              } 

              
         </div>
        
      </div>
      </nav>

      <style jsx>{`

     

        .mobileLogin {
          display : none!important;
        }



      @media (max-width: 992px) { 
        
        .mobileLogin {
          display : flex!important;
        }


      
      }
 
        #menu-ul {
          position: absolute;
          left: -82px;
          top: 40px;
        }

        @media  (max-width: 992px) {
          #menu {
            display: none;
          }
        }

      `}</style>

    </>
  );
};

export default Navbar;