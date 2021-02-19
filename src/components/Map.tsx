import React, { useEffect, useRef } from 'react';
import { MapDetail } from '../models/map-details';

interface MapProps {
  mapDetails: MapDetail;
}

const Map = ({ mapDetails: details }: MapProps) => {
  const canvas: any = useRef(null);

  useEffect(() => {
    // draw map
    drawMap();
  }, []);

  const drawMap = () => {
    if (canvas !== null && canvas.current) {
      const context = canvas.current.getContext('2d');
      context.fillStyle = 'green';
      context.fillRect(0, 0, 150, 150);
    }
  };

  return (
    <div>
      Map works
      <canvas ref={canvas} className='map-canvas'></canvas>
    </div>
  );
};

export default Map;
