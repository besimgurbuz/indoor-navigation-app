import React from 'react';
import { MAP_DETAILS } from '../models/map-details';
import Map from './Map';

interface FloorProps {
  floor: number;
}

const Floor = ({ floor }: FloorProps) => {
  return (
    <div className='floor-container'>
      <Map mapDetails={MAP_DETAILS.find((d) => d.floor === floor)!} />
    </div>
  );
};

export default Floor;
