import infoImagen from "../assets/images/home-restaurant.jpeg"
export const AcercaDe = () => {
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Acerca De</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi molestias laboriosam et consequuntur incidunt illo libero nesciunt corporis dolore eum, doloremque natus deserunt, asperiores accusantium odit eveniet provident cupiditate!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={infoImagen} alt="home-restaurante" className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>
    )
}