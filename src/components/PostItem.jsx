import React from 'react'
import { Link} from 'react-router-dom'
import '../css/postitem.css'

const PostItem = ({id, title, }) => {
  
  
  return (
    <div className='postitem'>
      <div className='title'>
           <h3>{id}.</h3>
           {/* <Link to='/comment'> */}
           <h3 className='color'>{title}</h3>
          {/* </Link>  */}
      </div>
    </div>  
  )
}

export default PostItem