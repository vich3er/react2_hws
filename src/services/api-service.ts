import axios from 'axios';
import {ICar} from "../models/ICar.ts";
const axoisInstanse = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1/cars',
    headers: {"Content-Type": "application/json"}
})



export const getAllCars = async (): Promise<ICar[]> => {
const response = await axoisInstanse.get<ICar[]>('');
    console.log(response);
    return response.data;
}