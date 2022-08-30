import React from 'react'
import ContentCategory from '../../components/contentCategory/ContentCategory'
import NavBar from '../../components/navBar/NavBar'

export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ContentCategory />
      </div>
    </div>
  )
}
