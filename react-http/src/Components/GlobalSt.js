import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GlobalSt() {

    const [loading,setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(() => {
        axios
        .get('https://jsonplaceholde.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Soemthing went wrong!')
        })
    }, [])
  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default GlobalSt