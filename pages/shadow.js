/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Index = () => {

  
  return (
    <>
    
    
       <h3 className='text-center my-5'>Hi there, I am Shadow</h3>
       <h6 className='muted text-center'>Siberian Husky</h6>
       <h6 className='muted text-center mb-4'>Male, 70 lbs, 4 yrs 8 mo</h6>

       <div className="imgBox">
        <img src="./shad1.jpg" className="img" alt="img"/>
      </div>

      <div className="container-fluid my-5">
        <div className="row justify-content-center">

          {/* about */}
          <div className="col-12 col-md-5 border rounded-2 m-3 p-3">
            <h4>About Shadow</h4>
            <ul>
              <li>
                 Has some personality issues with guarding food and certain toys <q>his roommate</q> and leash aggressivity.
              </li>
              <li>
                 He is otherwise Velcro dog and teddy bear that needs constant belly rubs and touch of human.
              </li>
              <li>
                Sleeps with people.
              </li>
              <li>
                Has flying insect anxiety.
              </li>
              <li>
                He has some twisted taste, and will eat squirrel of cat poops.
              </li>
              <li>
                He may be refusing eat but usually eat with persuasion.
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
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Friendly with children?
            </p>
            <p>Unsure</p>

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
            <p>At least 3x day</p>

             <p className='lead fw-semibold'>
              Energy Level?
            </p>
            <p>High</p>

             <p className='lead fw-semibold'>
              Feeding schedule?
            </p>
            <p>2 - 3x day</p>

             <p className='lead fw-semibold'>
              Can be left alone?
            </p>
            <p>1 - 4 hours</p>

             <p className='lead fw-semibold'>
              Medication?
            </p>
            <p>No</p>

             <p className='lead fw-semibold'>
              Additional care instructions?
            </p>
       

            <ul>
              <li>
                Needs to wear special harness to prevent escape
              </li>
              <li>
                Pulls when seeing cats, squirrels and dogs, with dogs has leash aggressivity.
              </li>
              <li>
                In dog park very friendly but gets <q>into face</q> of other dogs, trying to dominate-humping submissive dogs.
              </li>
              <li>
                Will try to escape-jumps or digs to find his human.
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