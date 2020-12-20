import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact.js';

function App() {
  const contact = {
    name: "Andres",
    phone: "0987534265"
  } ;

  return (
  <div>
    <h1>Hello Word ..!!</h1>
    <Contact contact={contact}/>
  </div>
  );
}

export default App;