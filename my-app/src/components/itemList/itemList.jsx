import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { ItemCard } from "../itemCard/itemCard";
import Progress from '../progress/progress';

export const ItemList = ({ arregloItems }) => {

    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const getDocHeight = () => {
          return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          )
        }
        const calculateScrollDistance = () => {
          const scrollTop = window.pageYOffset;
          const winHeight = window.innerHeight;
          const docHeight = getDocHeight();
          const totalDocScrollLength = docHeight - winHeight;
    
          const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);
          setScrollPosition(scrollPosition);
        }
        const handleScroll = (event) => {
          requestAnimationFrame(() => {
            calculateScrollDistance();
          });
        }
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
        <>
            <div className="container pt-5">
            <Progress scroll={scrollPosition}/>
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