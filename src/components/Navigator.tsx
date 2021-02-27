import React, { useEffect, useRef, useState } from 'react';

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
  const [nav, changeNav] = useState([0, 0, 0, 0]);

  useEffect(() => {
    changeNav(generateNavigation());
  }, [currentFloor, totalFloors]);


  const generateNavigation = (): number[] => {
    let res: number[] = [];
    let b = currentFloor;
    let f = currentFloor;

    res = res.reverse();
    while (b > 0 && res.length !== 4) {
      res.push(b);
      b--;
    }

    res = res.reverse();
    while (res.length !== 4) {
      res.push(f + 1);
      f++;
    }

    return res;
  };

  return (
    <div>
      { nav.map(item => {
        return <div className="page">
          {item}
        </div>
      })
      }
    </div>
  );
};

export default Navigator;
