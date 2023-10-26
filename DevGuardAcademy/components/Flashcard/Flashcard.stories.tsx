import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Flashcard from './Flashcard'; // Adjust the import path as needed

storiesOf('Flashcard', module)
  .add('Default', () => (
    <Flashcard front="Front of the Card" back="Back of the Card" />
  ))
  .add('Flipped', () => {
    // Simulate the flipped state
    return <Flashcard front="Front of the Card" back="Back of the Card" flipped={true} />;
  })
  .add('Loading State', () => {
    // Simulate a loading state
    // You might need to adjust your component to handle a loading state properly
    return <Flashcard front="Loading..." back="Loading..." />;
  });
