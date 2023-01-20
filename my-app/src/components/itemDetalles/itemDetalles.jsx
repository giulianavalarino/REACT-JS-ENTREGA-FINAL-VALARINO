import { useState } from 'react';
import { React } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetalles.css';

export const ItemDetalles = ({ arregloItems }) => {

    const { id } = useParams();

    const { nombre, descripcion, numero, imagen, stock } = arregloItems[id - 1];

    const [cart, setCart] = useState ([]);

    const onDecreaseItem = (id) => {}
    const onIncreaseItem = (id) => {}
    return (
        <>
            <div className="detalles containter text-center">
                <h1>{nombre}</h1>
                <h2>{descripcion}</h2>
                <h3>{numero}</h3>
                <img src={imagen}></img>
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
            </div>
        </>
    );
};