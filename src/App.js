import logo from './assets/logo.svg';
import './App.css';
import React, { useState } from 'react';
import HumanBody from './HumanBody';
import ExerciseList from './ExerciseList';

function App() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);

  return (
    <div className="App">
      <h1>Fitness App</h1>
      <HumanBody setSelectedMuscleGroup={setSelectedMuscleGroup} />
      <ExerciseList selectedMuscleGroup={selectedMuscleGroup} />
    </div>
  );
}

export default App;
