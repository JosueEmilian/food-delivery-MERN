import { useForm } from "react-hook-form"
import Button from "./elements/Button"
import { ReactComponent as ArrowRightSvg} from "../assets/icons/arrow-right.svg";
import { useDispatch } from "react-redux";
import { setDireccion } from "../stores/InfoUsr/direccionSlice";
import { ResumenProductos } from "./ResumenProductos";

export const FormEnvio = ({onTabSwitch}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setDireccion(data));
        onTabSwitch('Pago');
    }

    return (
        <form action="" className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center ">Informacion de Envio</h3>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="direccion">Direccion</label>
                <input
                    {...register('direccion', {required: true})}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="direccion envio"
                    type="text"
                    placeholder="Direccion de Entrega"
                    />
                {errors.direccion && <span className="text-red-500">Este campo es obligatorio</span> }
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="ciudad">Ciudad</label>
                    <input
                    {...register('ciudad')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="ciudad"
                    type="text"
                    placeholder="Ciudad"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="municipio">Municipio</label>
                    <input
                    {...register('municipio')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="municipio"
                    type="text"
                    placeholder="Municipio"
                    />
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="pais">Pais</label>
                    <input
                    {...register('pais')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="pais"
                    type="text"
                    placeholder="Pais"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="codigoPostal">Codigo Postal</label>
                    <input
                    {...register('codigoPostal')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="codigo postal"
                    type="text"
                    placeholder="Codigo Postal "
                    />
                </div>
            </div>
            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit"><span className="mr-1">Siguiente</span><ArrowRightSvg/></Button>
            </div>
        </form>
    )
}