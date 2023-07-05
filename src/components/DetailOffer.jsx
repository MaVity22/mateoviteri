import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DetailOffer = (props) => {
     // Se obtiene la funcion para obtener el brigadista por su id
     const { obtener} = props;
     // Se instancia el hook useNavigate
     let navegar = useNavigate();
     // Se obtiene el parámetro del path
     let { id } = useParams();
     let separado = id.split(':') 
     id = separado[1];
     //console.log(id);
     // se obtiene la oferta buscada
     var buscado = obtener(id);
     
     return (
         <div style={{ display: 'flex', flexDirection: 'column', width: '30%', alignItems: 'center' }}>
             <h1>Job Offer</h1>
             <input type="button" value='Job offers' onClick={() => navegar('../api/offers')} />
             <p className='label'>Job: </p>
             <span id='job'>{buscado.Job}</span>
             <p className='label'>Salary: </p>
             <span id='salary'>{buscado.salary}</span>
         </div>
     );
}
export default DetailOffer;