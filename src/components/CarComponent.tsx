import React, {FC} from 'react';
import {ICar} from "../models/ICar.ts";

interface CartCompProps {
    car: ICar
}

export const CarComponent:FC<CartCompProps> = ({car}) => {
    return (
      <div id={car.id|| Math.random()} className={'rounded-md p-1 my-5'}>
          <div className="border bg-white border-gray-200 rounded-md p-2 ">
              <p>{car.brand}</p>
              <p>{car.year}</p>
              <p>{car.price}</p>
          </div>
      </div>
    );
};

