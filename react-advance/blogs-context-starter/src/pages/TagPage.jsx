import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function TagPage() {

    const navigtion = useNavigation()
    const location = useLocation()
    const tag = location.pathname.includes.split("/").at(-1)

  return (
    <>
    <div>
        <Header/>
    </div>
    <div>
    <button onClick={()=> navigtion(-1)}>
    back
    </button>
    <h2>Blogs Tagged <span>#</span></h2>
    </div>
    <Blogs/>
    <Pagination/>
    </>
  )
}

export default TagPage