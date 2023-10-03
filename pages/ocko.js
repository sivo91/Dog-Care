/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Index = () => {

  
  return (
    <>
    
    
       <h3 className='text-center mt-5'>Hi there, I am Ochko</h3>
       <h6 className='muted text-center'>Siberian Husky</h6>
       <h6 className='muted text-center mb-4'>70 lbs, 5 years, 11 months</h6>

       <div className="imgBox">
        <img src="./ocko1.jpg" className="img" alt="img"/>
      </div>

      <div className="container-fluid my-5">
        <div className="row justify-content-center">

          {/* about */}
          <div className="col-12 col-md-5 border rounded-2 m-3 p-3">
            <h4>About Ochko</h4>

            <ul>
              <li>
                Ochko has autoimmune ilness inflammatory bowel disaese that affects her stomach as well.
              </li>
              <li>
                 Beffore she was on medication she vomited frequently and had diarrhea evey 2 hours.
              </li>
              <li>
                Now it is controlled with medication and diet.
              </li>
              <li>
                 She hates to be locked up in kennel.
              </li>
              <li>
                 Nothing Interest Her more than  a Food.
              </li>
              <li>
                 She is on a strict diet. She can only eat Ultamino kibble. Howeber, she likes obviously everything else.
              </li>
              <li>
                She needs to be watch not to eat dirt, stones or grass
              </li>
              <li>
                 When she is frustrated and wants to eat she will chew on plastic and wood.
              </li>
              <li>
                She needs to be watched not to eat other dogs food.
              </li>
            </ul>

            <p className='lead fw-semibold'>
              Spayed/Neutered?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Microchipped?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              House trained?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Friendly with dogs?
            </p>
            <p>Ochko is <q>Loner</q>, atypical dog personality almost like a cat. Cuddle on her own accord. She is now more settled and does not get into trouble that much. But she is on edge each time she meets new dog, her hair are up although she lover then, but only for a few minutes. She has some guarding issuew with squeaky and fuzzy toys. She is easily startled hence her anxiety turns into reactivity.</p>

            <p className='lead fw-semibold'>
              Friendly with children?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Friendly with cat?
            </p>
            <p>No</p>

           
            
          </div>



          {/* care */}
          <div className="col-12 col-md-5 border rounded-2 m-3 p-3">
            <h4>Care info</h4>

             <p className='lead fw-semibold'>
              Potty break schedule
            </p>
            <p>3x day</p>

             <p className='lead fw-semibold'>
              Energy Level?
            </p>
            <p>High</p>

             <p className='lead fw-semibold'>
              Feeding schedule?
            </p>
            <p>3x day</p>

             <p className='lead fw-semibold'>
              Can be left alone?
            </p>
            <p>1 - 4 hours</p>

             <p className='lead fw-semibold'>
              Medication?
            </p>
            <p>Pill - Budesonide daily or every other day or every 3rd day</p>

             <p className='lead fw-semibold'>
              Additional care instructions?
            </p>
   
            <ul>
               <li>
                We are trying to wean her off medication but not yet successful therefore it will be updated when and if she needs to take it.
               </li>
               <li>
                She has to be watched closely because often eats items that are dangerous.
               </li>
            </ul>



          </div>

        </div>
      </div>

      <Link href={'/'}
            className='btn btn-primary rounded-1 vstack mx-auto mb-5'
            style={{textDecoration: 'none', width: '200px'}}>
        Go Back
      </Link>

  

      <style>{`
      
      .img {
        position: relative;
        width: 100%;
      }

      .imgBox {
        position: relative;
        width: 400px;
        height: 300px;
        margin: 0 auto;
        overflow: hidden;
      }
      
      `}</style>
    </>
  )
}

export default Index