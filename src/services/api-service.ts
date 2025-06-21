import axios from 'axios';
import {ICar} from "../models/ICar.ts";
const axoisInstanse = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1/cars',
    headers: {"Content-Type": "application/json"}
})



export const getAllCars = async (): Promise<ICar[]> => {
const response = await axoisInstanse.get<ICar[]>('');
    // console.log(response);
    return response.data;
}

export const addCar = async (car: ICar)  : Promise<ICar> => {
    console.log('car' + car.brand + car.price + car.year);
    const {data} = await axoisInstanse.post('', {...car})
     const addedCar = data as ICar;
    console.log(addedCar);
    return addedCar;

}