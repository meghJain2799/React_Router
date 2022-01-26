import React from 'react';

const Mounting = () => {
  return <div>
      <h1 className='text-center'>Mounting Phase</h1>
      <div className='mx-5'>
      <p>After completing the component initialization, component mounting begins in which the component is created and inserted into the DOM. </p>
      <p>Mounting means putting elements into the DOM.</p>
      <p>Here, we’ll discuss the most commonly used lifecycle methods-</p>
     <h3> 1. constructor() </h3>
     <h3> 2. render() </h3>
     <h3> 3. componentDidMount() </h3>
      
      </div>
  </div>;
};

export default Mounting;

