import React, {FC} from 'react';
import {ICar} from "../models/ICar.ts";

interface CartCompProps {
    car: ICar
}

export const CarComponent:FC<CartCompProps> = ({car}) => {
    return (
        <div className="border border-gray-200 p-5 my-5">
            <p>{car.brand}</p>
            <p>{car.year}</p>
            <p>{car.price}</p>
        </div>
    );
};

