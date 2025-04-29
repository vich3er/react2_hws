import {ICart} from "../../models/ICart.ts";

interface CartProps {
    cart: ICart;
}

export const CartComponent = ({cart}: CartProps) => {
    return (
        <div>
            <p>total: {cart.total}</p>
            {cart.products.map((product) => <p key={product.id}>{product.title} {product.price}</p>)}
        </div>
    );
};