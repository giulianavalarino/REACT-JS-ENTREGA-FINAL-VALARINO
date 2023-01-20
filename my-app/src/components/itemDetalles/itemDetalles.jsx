import { React } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetalles.css';

export const ItemDetalles = ({ arregloItems }) => {

    const { id } = useParams();

    const { nombre, descripcion, numero, imagen } = arregloItems[id - 1];

    return (
        <>
            <div className="detalles containter text-center">
                <h1>{nombre}</h1>
                <h2>{descripcion}</h2>
                <h3>{numero}</h3>
                <img src={imagen}></img>
            </div>
        </>
    );
};