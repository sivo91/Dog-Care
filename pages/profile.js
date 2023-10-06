import React from 'react'
import { useSelector } from 'react-redux'
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInYears,
  parseISO
} from 'date-fns';


const Index = () => {
const { user } = useSelector((state) => state.userAuth)
//console.log(user)

const created = user?.createdAt
console.log(created)


const relativeTime = (created) => {
  const now = new Date();
  const createdDate = parseISO(created);

  const minsDiff = differenceInMinutes(now, createdDate);
  if (minsDiff < 60) return `${minsDiff} min${minsDiff !== 1 ? 's' : ''} ago`;

  const hrsDiff = differenceInHours(now, createdDate);
  if (hrsDiff < 24) return `${hrsDiff} hr${hrsDiff !== 1 ? 's' : ''} ago`;

  const daysDiff = differenceInDays(now, createdDate);
  if (daysDiff < 365) return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;

  const yearsDiff = differenceInYears(now, createdDate);
  return `${yearsDiff} year${yearsDiff !== 1 ? 's' : ''} ago`;
};

const time = relativeTime(created)

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