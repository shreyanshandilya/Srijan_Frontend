import React from 'react';
import CardComponent from './card';
import Navbar from '../../components/Navbar/navbar';

const PackagePage = () => {
  // Define an array of packages with their titles and eligible things
  const packages = [
    {
      title: 'Platinum',
      eligibleThings: ['Accommodation','Merchandise',   'Pro Nights', 'Events'],
    },
    {
      title: 'Gold',
      eligibleThings: ['Accommodation','Merchandise',  'Events'],
    },
    {
        title:'Silver',
        eligibleThings: [ 'Accommodation', 'Events'],
    },
    {
        title:'Bronze',
        eligibleThings: [ 'Pronites', 'Events'],
    }
    // Add more packages as needed
  ];

  return (
    <div className='bg-black'>
        <Navbar/>
    <div  className="min-h-[100vh] py-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-6
}" style={{alignContent: "center"
}}>
     
      {packages.map((packageItem, index) => (
         <CardComponent title={packageItem.title} eligibleThings={packageItem.eligibleThings}/>
      ))}
    </div></div>
  );
};

export default PackagePage;
