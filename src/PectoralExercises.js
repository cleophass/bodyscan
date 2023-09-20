import React from 'react';
import pushUpGif from './assets/push_up.gif';  // N'oubliez pas de l'importer
import './PectoralExercises.scss';

const PectoralExercises = () => {
  const pectoralExercises = [
    // ... autres exercices
  ];

  return (
    <div>
      <h1>Exercices pour les pectoraux</h1>
      <ul>
        {pectoralExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
      <div>
        <h2>Exemple de Push-up</h2>
        <img src={pushUpGif} alt="Push-up example" className="push-up-gif" />

      </div>
    </div>
  );
};

export default PectoralExercises;
