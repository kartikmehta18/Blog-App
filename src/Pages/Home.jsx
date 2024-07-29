import React, {useEffect,useState} from 'react'
import appwriteService from "../appwrite/config"

function Home() {

    const[posts , setPosts] = useState([])

    useEffect(() => {
    appwriteService.getPosts().then((posts) =>{
        if (posts) {
            setPosts(posts.documents)
        }
    })
}, [])


if(posts.length=== 0){
    return(
        
    )
}

  return (
    <div>
      
    </div>
  )
}

export default Home
