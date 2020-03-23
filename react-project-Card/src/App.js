import React from 'react';
import './App.css';

const Card = (props) => {
  return(
    <div class="card">
      <p class="title">{props.name}</p>
      <p>{props.job}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Card name="Abdurrahman Jaes" job="Front-End Web Developer"></Card>
      <Card name="Bramantya Gento" job="Back-End Web Developer"></Card>
      <Card name="Muklas Muklis" job="Android Developer"></Card>
      <Card name="Ruditya Hedon" job="UI/UX Designer"></Card>
    </div>
  );
}

export default App;