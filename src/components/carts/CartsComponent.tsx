import {useLocation} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {useEffect, useState} from "react";
import {getData} from "../../services/api-service.ts";
import {IResponse} from "../../models/IResponse.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
    const {state} = useLocation();
    console.log(state);// чому при кліку його виводить 30 разів?
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        getData<IResponse & {carts: ICart[]}>('carts/user/'+ state).then(({carts})=>setCarts(carts))
    }, [])
    console.log(carts);
    return (
        <>
            {carts&&
                carts.map((cart) => (<CartComponent key={cart.id} cart={cart} />))
            }
        </>
    );
};