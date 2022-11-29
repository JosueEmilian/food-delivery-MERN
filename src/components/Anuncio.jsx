import Button from "./elements/Button";
export const Anuncio =  () => {
    return(
        <div className="anuncio w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="anuncio-descripcion w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Pedir a domicilio nunca había sido tan fácil!
                </h2>
                <p className="font-semibold text-lg text-orange-300 py-2">
                    revisa nuestro menú del dia!
                </p>
                <div className="btn-container">
                    <Button>Ordena ahora mismo</Button>
                    <a href="/menu" className="text-orange-600 hover:text-orange-400 font-bold text-decoration-line text-lg px-3">
                        Ver menu
                    </a>
                </div>
            </div>
            <div className="anuncio-imagen w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../assets/images/food.jpeg")} alt="AnuncioFood" className="max-h-95" />
            </div>
        </div>
    )
}