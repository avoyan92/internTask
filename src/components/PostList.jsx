import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import PostItem from './PostItem'
import { Link } from 'react-router-dom'

const PostList = () => {
const [items, setItems] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [itemCountPerPage] = useState(10)

useEffect(() => {
      fetch(`https://dummyjson.com/posts?`)
.then(res => res.json())
.then(json => setItems(json.posts))
}, [currentPage])

const paginate = (number) => {
  setCurrentPage(number)
}

const lastItemIndex = currentPage * itemCountPerPage
const firstItemIndex = lastItemIndex - itemCountPerPage
const currentPosts = items.slice(firstItemIndex, lastItemIndex)


return (
    <div>
      {currentPosts.map((post) => <Link  key={post.id} to={`/commentpage/${post.id}`}><PostItem {...post}/></Link>)}
      <Pagination paginate={paginate} items={items.length} itemCountPerPage={itemCountPerPage} /> 
    </div>
  )
}

export default PostList


