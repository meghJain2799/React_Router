import React from 'react';

const Unmounting = () => {
  return <div>
      <h1 className='text-center'>Unmounting Phase</h1>
      <div className='mx-5'>
      <p>This is the last phase in which a react component goes through where it gets unmounted from DOM and destroyed. There is only one lifecycle method in this phase. </p>
      <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
      React has only one built-in method that gets called when a component is unmounted:</p>
      <p>Here, we will discuss the most commonly used lifecycle method-</p>
     <h3> 1. componentWillUnmount() </h3>
      
      </div>
  </div>;
};

export default Unmounting

