export interface MapDetail {
  floor: number | string;
  totalShops: number;
  shopDetails: ShopDetail[];
}

export interface ShopDetail {
  width: number;
  height: number;
  startX: number;
  startY: number;
}

export const MAP_DETAILS: MapDetail[] = [
  {
    floor: 1,
    totalShops: 4,
    shopDetails: [],
  },
  {
    floor: 2,
    totalShops: 5,
    shopDetails: [],
  },
  {
    floor: 3,
    totalShops: 5,
    shopDetails: [],
  },
  {
    floor: 4,
    totalShops: 5,
    shopDetails: [],
  },
  {
    floor: 5,
    totalShops: 5,
    shopDetails: [],
  },
];
