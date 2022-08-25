import React from 'react'
import Header from './header';
import HeroCard from './heroCard';
import DynamicTable from './table';
const Home = () => {
  return (
    <>
      <Header/>
      <HeroCard />
      <DynamicTable />
    </>
  )
}

export default Home