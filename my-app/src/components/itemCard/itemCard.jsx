import { React } from 'react';
import './itemCard.css';
import { NavLink } from "react-router-dom";

export const ItemCard = ({ item, descreaseQty, increaseQty, numberOfItem  }) => {
    const { nombre, descripcion, numero, id, categoria, imagen, stock } = item;

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
                    <p className="card-text">
                        {stock} in stock
                    </p>
                    <button 
                    disabled={numberOfItem === 0} 
                    onClick={() => descreaseQty(id)} 
                    className='card-button-minus'
                    >-</button>
                    <input
                    disabled
                    className='card-input'
                    type='text'
                    value={numberOfItem}
                    
                    />
                    <button
                    onClick={() => increaseQty(id)} 
                    className='card-button-plus'
                    disabled={numberOfItem === stock}
                    >+</button>
                    <NavLink to={`${id}`}> <label className="btn btn-primary">Más detalles</label> </NavLink>
                </div>
            </div>
        </>
    )
}