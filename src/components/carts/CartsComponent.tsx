import { useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {useEffect, useState} from "react";
import {getData} from "../../services/api-service.ts";
import {IResponse} from "../../models/IResponse.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
   const {userId} = useParams();

    console.log(userId) ;
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        getData<IResponse & {carts: ICart[]}>('carts/user/'+ userId).then(({carts})=>setCarts(carts))
    }, [userId]);
    console.log(carts);

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