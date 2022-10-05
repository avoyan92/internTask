import React from 'react'
import '../css/postitem.css'

const Pagination = ({items, itemCountPerPage, paginate}) => {
  let arr = []
for (let i = 1; i<=Math.ceil(items / itemCountPerPage); i++){
   arr.push(i)
}
  return (
    <div className='buttons'>
      {arr.map(i => (
        <button className='btn' onClick={() => paginate(i)} key={i}>{i}</button>
      ))}
    </div>
  )
}

export default Pagination