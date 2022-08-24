import React from 'react' 
import HeroCard from './heroCard';
import DynamicTable from './table'; 
const Home = () => {
  return (
    <div >
     <HeroCard/>
        <DynamicTable />
    </div>
  )
}

export default Home