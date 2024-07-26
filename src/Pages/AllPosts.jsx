import React, { useEffect, useState } from 'react'
import { PostForm , Container } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
    const[posts , setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) =>{
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Container >
        <div className='felx flex-wrap'>
        
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
