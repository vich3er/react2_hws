import axios from 'axios';
import {ICar} from "../models/ICar.ts";
const axoisInstanse = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1/cars',
    headers: {"Content-Type": "application/json"}
})



export const getAllCars = async (): Promise<ICar[]> => {
const response = await axoisInstanse.get<ICar[]>('');
    // console.log(response);
    return response.data;
}

export const addCar = async (car: ICar)=> {
    console.log('car' + car.brand + car.price + car.year);
    const res = await axoisInstanse.post('', {...car})

    console.log(res.data);
    return res.data
}