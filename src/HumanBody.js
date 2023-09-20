import React, { useState } from 'react';
// Importez le SVG comme un composant React
import { ReactComponent as MuscularSystem } from './assets/Muscular_system.svg';
import PectoralExercises from './PectoralExercises';  // N'oubliez pas de l'importer
import './HumanBody.scss';

function HumanBody({ setSelectedMuscleGroup }) {
  const [showExercises, setShowExercises] = useState(false);

  const handleSvgClick = (event) => {
    const clickedElement = event.target;
    const muscleGroup = clickedElement.id || clickedElement.getAttribute('data-name');
    
    console.log("Clicked on muscle group: ", muscleGroup);

    if (muscleGroup) {
      setSelectedMuscleGroup(muscleGroup);
    }

    if (muscleGroup === 'pec1' || muscleGroup === 'pec2') {
      setShowExercises(true);
      console.log("Vous avez cliqué sur les pectoraux.");
    }
  };

  return (
    <div className="HumanBody">
      { showExercises ? <PectoralExercises /> : <MuscularSystem onClick={handleSvgClick} className="muscular-system" />}
    </div>
  );
}

export default HumanBody;
