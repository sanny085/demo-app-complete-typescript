import React from 'react'; 
import './App.css';

import {personData, mentors} from './AppStaticData';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import HomeScreen from './components/HomeScreen';
import Status from './components/Status';


function App() {
  
  return (
    <div className="App">
       <Navbar fName="Sanny" lName="Kumar" isLoggedIn={true} />

       <Status message="success"/>
       
       <Profile person={personData}/>
       <HomeScreen mentors={mentors}/>
    </div>
  );
}

export default App;
