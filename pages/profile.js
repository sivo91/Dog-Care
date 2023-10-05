import React from 'react'
import { useSelector } from 'react-redux'
import { differenceInDays, parseISO } from 'date-fns';


const Index = () => {
const { user } = useSelector((state) => state.userAuth)
//console.log(user)

const created = user?.createdAt
const parsedDate = parseISO(created)
const now = new Date()

const daysAgo = differenceInDays(now, parsedDate)
//console.log(typeof daysAgo) // number
let time


if(daysAgo == 0) {
   time = 'Today' 
} else {
   time = daysAgo + ' days ago.'
}

  return (
    <>
       <h3 className='text-center my-5'>Profile Page</h3>

       <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center pt-3 bg-light border">
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>CreatedAt: {time}</p>
          </div>
        </div>
       </div>
    </>
  )
}

export default Index