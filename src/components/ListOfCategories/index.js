import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'
import { Loading } from '../Loading/index'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('https://petgram-burdiaktrinidad.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (

      <List fixed={fixed}>
        {loading
          ? <Loading />
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
      </List>
    )
  }

  return (

    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}
