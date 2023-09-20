import React from 'react';
import exercises from './data/exerciseData';

function ExerciseList({ selectedMuscleGroup }) {
  if (!selectedMuscleGroup) {
    return <div>Please select a muscle group.</div>;
  }

  const filteredExercises = exercises.filter(exercise => exercise.muscleGroup === selectedMuscleGroup);

  return (
    <div className="ExerciseList">
      <h2>Exercises for {selectedMuscleGroup}</h2>
      <ul>
        {filteredExercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
