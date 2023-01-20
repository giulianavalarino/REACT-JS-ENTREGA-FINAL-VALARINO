import { React } from 'react';
import './itemCard.css';
import { NavLink } from "react-router-dom";

export const ItemCard = ({ item }) => {
    const { nombre, descripcion, numero, id, categoria, imagen } = item;

    return (
        <>
            <div className="card tarjeta" key={id}>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{numero}</h6>
                    <img src={imagen} height="110" alt="img app" className="" />
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <NavLink to={`${id}`}> <label className="btn btn-primary">Más detalles</label> </NavLink>
                </div>
            </div>
        </>
    )
}