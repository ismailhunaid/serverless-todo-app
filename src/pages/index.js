import React from 'react';
import {AddTodos} from '../components/AddTodos';
import {GetTodos} from '../components/GetTodos'




const Home = () => {
  return(
    <div>
      <div> <AddTodos /></div>
      <br />
      <br />
      <GetTodos />

    </div>
  )
}
  

  
export default Home;