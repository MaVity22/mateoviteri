import React from 'react';
import {  useNavigate } from 'react-router-dom';

// Se declara un componente REACT 'JobOffers' que recibe el props
const JobOffers = (props) => {
    // Se obtiene la lista
    const {lista} = props;
    // Se instancia el hook useNavigate
    let navegar = useNavigate();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '30%', alignItems: 'center' }}>
            <h1>Job Offers</h1>
            <input type='button' value='Add Offer' onClick={() => navegar('../api/offer/new')} />
            <div className='contenedor'>
                {lista.map((item) => { return(
                    <div className='job-offer'>
                        <p>{item.Job} - {item.salary} USD</p>
                        <input type='button' value='View Offer' onClick={() => navegar('../api/offer/:'+ item.id)} />
                    </div>
                )})}
            </div>
        </div>
    );
}
export default JobOffers;