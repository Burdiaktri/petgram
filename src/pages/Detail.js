import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

const Detail = ({ detailId }) => {
  const params = useParams()
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  )
}

export default Detail
