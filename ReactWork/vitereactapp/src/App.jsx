import React from "react";
import Student from "./Student";

function App() {
  let a=12;
  const mystyle={
    backgroundColor: 'red',
    color: 'cyan',
  };
  return (
    <div style={mystyle}> ABES Engineering College 
    <div style={mystyle}> (a)</div>
    <Student college="ABES Engineering College" name="Kavya" roll="85" branch="CSE" section="A" />
    </div>
  );
}

export default App;