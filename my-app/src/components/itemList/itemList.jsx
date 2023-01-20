import { React } from "react";
import './styles.css';
import { ItemCard } from "../itemCard/itemCard";

export const ItemList = ({ arregloItems }) => {
    return (
        <>
            <div className="container pt-5">
                <h4 className="text-center">Vista principal</h4>

                <div className="row mt-5">
                    {arregloItems.map((app) => (
                        <div className="col-md-4 col-sm-12">
                            <ItemCard item={app} key={app.id} />
                        </div  >
                    ))}
                </div>
            </div>
        </>
    )
}