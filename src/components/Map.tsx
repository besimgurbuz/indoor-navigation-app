import React, { useEffect, useRef } from 'react';
import { MapDetail } from '../models/map-details';
import './Map.css';

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

interface MapProps {
  mapDetails: MapDetail;
}

const Map = ({ mapDetails: details }: MapProps) => {
  const canvas: any = useRef(null);

  useEffect(() => {
    // draw map
    drawMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawMap = () => {
    if (canvas !== null && canvas.current) {
      const context = canvas.current.getContext('2d');
      for (const shop of details.shopDetails) {
        const {
          startX,
          startY,
          width,
          height,
          label,
          fillColor,
          labelColor,
          labelSize,
        } = shop;

        context.fillStyle = fillColor;
        context.fillRect(startX, startY, width, height);
        context.fillStyle = labelColor;
        context.font = `${labelSize}px`;

        const labelX = (label.length * labelSize - width) / 2 + startX;
        const labelY = startY + height / 2;
        context.fillText(label, labelX, labelY);
      }
    }
  };

  return (
    <canvas
      ref={canvas}
      className='map-canvas'
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    ></canvas>
  );
};

export default Map;
