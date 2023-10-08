import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function CategoryPage() {

    const navigtion = useNavigation()
    const location = useLocation()
    const category = location.pathname.includes.split("/").at(-1)
  return (
    <>
    <div>
    <Header/>
    </div>
    <div>
    <button onClick={()=> navigtion(-1)}>
    back
    </button>
    <h2>Blogs on <span>{category}</span></h2>
    <Blogs/>
    <Pagination/> 
    </div>
    </>
  )
}

export default CategoryPage