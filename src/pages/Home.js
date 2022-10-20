import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const params = useParams()
  return (

    <Layout title='Tu app de mascotas'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

export default Home
