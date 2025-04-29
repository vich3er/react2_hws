import {useLocation} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {useEffect, useState} from "react";
import {getData} from "../../services/api-service.ts";
import {IResponse} from "../../models/IResponse.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
    const {state} = useLocation();

    console.log(state) ;
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        getData<IResponse & {carts: ICart[]}>('carts/user/'+ state).then(({carts})=>setCarts(carts))
    }, [state]);
    console.log(carts);
 console.log(   import.meta.env.VITE_BASE_URL + '/carts/user/'+ state);
    return (
        <>
            {carts.length>0?
                carts.map((cart) => (<CartComponent key={cart.id} cart={cart} />))
                :
                <p>Немає покупок</p>

            }
        </>
    );
};