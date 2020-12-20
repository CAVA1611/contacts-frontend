import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Contacts.js';

function App() {
  const contacts = [
    {name: "Andres", phone: "0987534265"},   {name: "Cesar", phone: "0995134542"}
  ];
  return (
  <div>
    <h1>Hello Word ..!!</h1>
    <Contacts contacts={contacts}/>
  </div>
  );
}

export default App;