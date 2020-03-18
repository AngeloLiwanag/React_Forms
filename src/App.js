import React, { useState } from 'react';
import './App.css';
import HookForm from './components/HookForm';
import FormData from './components/FormData';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    submit: false
  })

  return (
    <div className="App">
      <HookForm inputs={state} setInputs={setState}/>
      <FormData data={state}/>
    </div>
  );
}

export default App;
