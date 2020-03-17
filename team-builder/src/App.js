import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {

  const [stateList, setStateList] = useState([]);

  return (
    <div className="App" >
      <h1>Team List</h1>
      <TeamForm />
      <TeamMembers friends={stateList}/>
    </div>
  );
}

export default App;
