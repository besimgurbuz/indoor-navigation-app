import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import './Navigator.css';

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
  const [nav, setNav] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    generateNavItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFloor, totalFloors]);

  const generateNavItems = () => {
    const left = currentFloor - 2 <= 0 ? 1 : currentFloor - 2;
    const right =
      currentFloor + 2 >= totalFloors ? totalFloors : currentFloor + 2;

    const items = [];
    for (let i = left; i <= right; i++) {
      items.push(i);
    }
    setNav(items);
  };

  return (
    <ButtonGroup className='navigation' color='primary' variant='contained'>
      {nav.map((item) => {
        return <Button>{item}</Button>;
      })}
    </ButtonGroup>
  );
};

export default Navigator;
