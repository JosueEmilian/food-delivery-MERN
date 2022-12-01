import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { eliminarCarrito, carritoProductos } from "../stores/carrito/carSlice";
import { getDireccion, clearDireccion } from "../stores/InfoUsr/direccionSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import Button from "./elements/Button";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <FormPago/>
        </Elements>
    )
}

const FormPago = () => {
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(carritoProductos);
    const address = useSelector(getDireccion);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements || !cart?.length || !address){
            return;
        }

        setCargando(true);
        try {
            const {error: backEndError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    orderItems: cart,
                    userId: '',
                    shippingAddress: address
                })
            }).then(r => r.json());

            const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement)
                    }
                }
            )
            if(backEndError || stripeError){
                setError(backEndError || stripeError)
            } else if (paymentIntent.status === 'succeeded'){
                dispatch(clearDireccion());
                dispatch(eliminarCarrito());
                navigate('/payment-sucess');
            }
        } catch (err) {
            console.log(e)
        }

        setCargando(false);
    }

    return (
        <form className="md:-2/3 md:mx-auto px-2 pt-1" id="form-pago" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Por favor ingrese los datos de su tarjeta</label>
            <div className="my-4">
                <CardElement id="card-element"/>
            </div>
            <div className="flex justify-center p-2">
                <Button type="submit" disbled={cargando}>
                    {
                        cargando ?
                        'Cargando...' :
                        'Pagar ahora'
                    }
                </Button>
            </div>
        </form>
    )
}