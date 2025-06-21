import React, {FC, useState} from 'react';
import {ICar} from "../models/ICar.ts";


interface CartCompProps {
    car: ICar
    higlighted: boolean;
}

export const CarComponent:FC<CartCompProps> = ({car, higlighted}) => {
    const odinaryStyle = "border bg-white border-gray-200 rounded-md p-2 ";
    const higlitedStyle = "  rounded-md my-3 color-animation    ";
 return (

          <div className={   higlighted? higlitedStyle:"my-3"}>
            <div className={odinaryStyle}>
                <p>brand: {car.brand}</p>
                <p>year: {car.year}</p>
                <p>price: {car.price}</p>
            </div>
          </div>

    );
};

