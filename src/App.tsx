import React from 'react';
import './App.css';
import Floor from './components/Floor';
import Navigator from './components/Navigator';
import Search from './components/Search';
import { MAP_DETAILS } from './models/map-details';

const App = () => {
  let currentFloor = 1;
  const handleNavigate = (floor: number): void => {
    currentFloor = floor;
    console.log('Navigated');
  };

  const handleSearch = (value: string) => {
    console.log('Searched', value);
  };

  return (
    <div className='App'>
      <Search seachHandler={handleSearch} />
      <Floor floor={currentFloor} />
      <Navigator
        currentFloor={3}
        totalFloors={MAP_DETAILS.length}
        navigateHandler={handleNavigate}
      />
    </div>
  );
};

export default App;
