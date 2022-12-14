import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import moment from 'moment'

import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=> {
    getCategories()
      .then((newCategories)=> setCategories(newCategories))

  }, [])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-3'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category)=> (
      <Link key={category.slug} href={`/category/${category.slug}`}>
        <span className='cursor-pointer block pb-3 mb-3 hover:-translate-y-1 transition duration-300 transform hover:text-lg hover:text-red-500'>
          {category.name}
        </span>
      </Link>
    ))}
    </div>
  )
}

export default Categories;