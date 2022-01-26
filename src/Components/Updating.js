import React from 'react';

const Updating = () => {
  return <div>
     <h1 className='text-center'>Updating Phase</h1>
      <div className='mx-5'>
      <p>Unlike the ‘Mounting’ phase that occurs only once while mounting the component, the ‘Updating’ phase can occur multiple times. </p>
      <p>Whenever there is any change in the props/state of the component that needs to be updated, a timer calls for render and componentDidupdate to acknowledge, update, and render the change, the Updating phase comes into play.</p>
      <p>Here, we’ll discuss the most commonly used lifecycle methods-</p>
     <h3> 1. static getDerivedStateFromProps() </h3>
     <h3> 2. shouldComponentUpdate() </h3>
     <h3> 3. render() </h3>
     <h3> 4. getSnapshotBeforeUpdate() </h3>
     <h3> 5. componentDidUpdate() </h3>
      
      </div>
  </div>;
};

export default Updating;
