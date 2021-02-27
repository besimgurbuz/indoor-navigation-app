export interface MapDetail {
  floor: number | string;
  totalShops: number;
  shopDetails: ShopDetail[];
  startPoint: { x: number; y: number };
}

export interface ShopDetail {
  width: number;
  height: number;
  startX: number;
  startY: number;
  fillColor: string;
  label: string;
  labelColor: string;
  labelSize: number;
}

export const MAP_DETAILS: MapDetail[] = [
  {
    floor: 1,
    totalShops: 4,
    shopDetails: [
      {
        width: 50,
        height: 30,
        startX: 10,
        startY: 10,
        label: 'Shop A',
        fillColor: 'orange',
        labelColor: 'white',
        labelSize: 5,
      },
      {
        width: 50,
        height: 30,
        startX: 60,
        startY: 10,
        label: 'Shop B',
        fillColor: 'red',
        labelColor: 'white',
        labelSize: 5,
      },
      {
        width: 50,
        height: 30,
        startX: 110,
        startY: 10,
        label: 'Shop C',
        fillColor: 'orange',
        labelColor: 'white',
        labelSize: 5,
      },
      {
        width: 50,
        height: 30,
        startX: 160,
        startY: 10,
        label: 'Shop D',
        fillColor: 'red',
        labelColor: 'white',
        labelSize: 5,
      },
      {
        width: 50,
        height: 30,
        startX: 210,
        startY: 10,
        label: 'Shop E',
        fillColor: 'orange',
        labelColor: 'white',
        labelSize: 5,
      },
    ],
    startPoint: { x: 0, y: 0 },
  },
  {
    floor: 2,
    totalShops: 5,
    shopDetails: [],
    startPoint: { x: 0, y: 0 },
  },
  {
    floor: 3,
    totalShops: 5,
    shopDetails: [],
    startPoint: { x: 0, y: 0 },
  },
  {
    floor: 4,
    totalShops: 5,
    shopDetails: [],
    startPoint: { x: 0, y: 0 },
  },
  {
    floor: 5,
    totalShops: 5,
    shopDetails: [],
    startPoint: { x: 0, y: 0 },
  },
];
