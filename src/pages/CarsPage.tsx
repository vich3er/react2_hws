import {useEffect, useState} from "react";
import {getAllCars} from "../services/api-service.ts";
import {ICar} from "../models/ICar.ts";
import {CarComponent} from "../components/CarComponent.tsx";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);

        useEffect(() => {
        getAllCars().then(res=> setCars(res))
    }, []);
    return (
        <div>
            {cars&& cars.map((car) => (
                 <CarComponent key={car.id} car={{...car}} />
            ))}
        </div>
    );
};

export default CarsPage;