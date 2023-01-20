import { Route, Routes, Navigate } from "react-router-dom";
import { ItemList } from "../components/itemList/itemList";
import { useEffect, useState } from "react";
import { consultaApi, API_Endpoints, API_Verbos } from "../services/ApiServices";
import { ItemDetalles } from "../components/itemDetalles/itemDetalles";

export const Router = () => {

    const [arregloItems, setArregloItems] = useState([]);

    useEffect(() => {
        consultaApi(API_Endpoints.ITEMS, API_Endpoints.GET).then((respuesta) => {
            setArregloItems(respuesta.data);
        })
    },[])

    return (
        <div className="">
            <Routes>
                <Route path="*" element={<Navigate to={"/itemList"}/>} />
                <Route path="/itemList" element={<ItemList arregloItems={arregloItems}/>}/>
                <Route path="/Remeras" element={<ItemList arregloItems={arregloItems.filter((item) => item.categoria == true)}/>} />
                <Route path="/Vestidos" element={<ItemList arregloItems={arregloItems.filter((item) => item.categoria == false)}/>} />
                <Route path="/itemList/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
                <Route path="/Remeras/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
                <Route path="/Vestidos/:id" element={<ItemDetalles arregloItems={arregloItems}></ItemDetalles>} />
            </Routes>
        </div>
    );
};