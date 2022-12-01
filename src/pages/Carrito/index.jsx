import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { carritoProductos } from "../../stores/carrito/carSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg} from "../../assets/icons/arrow-right.svg";
import { FormEnvio } from "../../components/FormEnvio";
import { ResumenProductos } from "../../components/ResumenProductos";
import { StripeWrapper } from "../../components/FormPago";


const Carrito = () => {
    const carrito = useSelector(carritoProductos);
    const tabs = ['Resumen', 'Entrega', 'Pago'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Resumen');

    if(!carrito || carrito.length === 0){
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>El carrito esta vacio</h1>
            </div>
        )
    }
    return(
        <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Resumen' ? 'hidden'  : ''} `}>
                <ResumenProductos/>
                <div className="flex justify-end p-2">
                    <Button variant="dark" className="flex items-center" onClick={() => handleTabSwitch('Entrega') }><span className="mr-1">Siguiente</span><ArrowRightSvg/></Button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Entrega' ? 'hidden'  : ''} `}>
                <FormEnvio onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !== 'Pago' ? 'hidden'  : ''} `}>
                <StripeWrapper/>
            </div>
        </div>
    )
}

export default Carrito;