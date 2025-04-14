import {IProduct, IProducts} from "../models/IProducts.ts";




export const getProducts =async (): Promise<IProduct[]>=>{
    const res: IProducts  = await fetch("https://dummyjson.com/products").then((res) => res.json());
    return res.products;
}