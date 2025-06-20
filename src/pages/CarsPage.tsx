import {useEffect, useState} from "react";
import {getAllCars} from "../services/api-service.ts";
import {ICar} from "../models/ICar.ts";
import {CarComponent} from "../components/CarComponent.tsx";
import {AddCar} from "../components/AddCar.tsx";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);

      const loadCars =  ()=> getAllCars().then(res=> setCars(res ))
    useEffect(() => {
        loadCars();
    }, []);
    return (
        <div className={'flex items-center p-10 justify-around'}>
            <AddCar loadCars = { loadCars} />
           <div className={'flex flex-col h-[90vh] overflow-y-scroll '}>
               {cars&& cars.reverse().map((car, i) => (
                   <CarComponent key={i} car={{...car}} />
               ))}
           </div>
        </div>
    );
};

export default CarsPage;