import React from 'react';

interface NavigatorProps {
  currentFloor: number;
  totalFloors: number;
  navigateHandler: (floor: number) => void;
}

const Navigator = ({
  currentFloor,
  totalFloors,
  navigateHandler: navigate,
}: NavigatorProps) => {
  return <div>Navigator works</div>;
};

export default Navigator;
