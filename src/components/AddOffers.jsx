import React from 'react';
import { useNavigate } from 'react-router-dom';

// Se declara un componente REACT 'AddeOffers' que recibe el props
const AddOffers = (props) => {
    //
    const listaPuestos = ['Frontend developer', 'Backend developer', 'DevOps', 'Fullstack developer'];
    // Se obtiene el hook para setear valores en la lista
    const { agregar, lista } = props;
    // Se instancia el hook useNavigate
    let navegar = useNavigate();
    // offer generico
    let iden = 0;
    let job = "";
    let salario = 0;

    // funcion que agrega y enruta a la pagina principal
    const Sjob = (e) => {
        job = e.target.value;
        if (job.trim().length === 0) {
            alert('Es necesario que indiques el puesto.');
        }
    }

    /*const Sid = (e) => {
        iden = e.target.value;
    }*/

    const Ssalario = (e) => {
        salario = e.target.value;
        if (salario.trim().length === 0) {
            alert('Es necesario que indiques el salario.');
        }
    }

    // funcion que agrega la nueva oferta 
    const nuevoOffer = () => {
        if (salario.trim().length === 0) {
            alert('Es necesario que indiques el salario.');
        }
        else if (job.trim().length === 0) {
            alert('Es necesario que indiques el puesto.');
        }
        else {
            const ultimoObjeto = lista[lista.length - 1];
            iden = ultimoObjeto.id + 1;
            let nuevo = { id: iden, Job: job, salary: salario }
            console.log(nuevo)
            console.log(lista)
            const estaRepetido = lista.some(objeto => objeto.Job == nuevo.Job && objeto.salary == nuevo.salary);
            console.log(estaRepetido)
            if (estaRepetido) {
                alert('No se puede agregar una oferta repetida.');
            } else {
                agregar(nuevo);
            }
        }
    }

    return (
        <div className='contenedor-add'>
            <div className='formulario' style={{ display: 'flex', flexDirection: 'column', width: '30%', alignItems: 'center' }}>
                <h1>Add new job offer </h1>
                <input type="button" value='Job offers' onClick={() => navegar('../api/offers')} />
                <label id='offer'>Jof: </label>
                <select required name="puestos" onBlur={Sjob} onChange={Sjob}>
                    <option value='' selected disabled>Job</option>
                    <option value={listaPuestos[0]}>{listaPuestos[0]}</option>
                    <option value={listaPuestos[1]}>{listaPuestos[1]}</option>
                    <option value={listaPuestos[3]}>{listaPuestos[2]}</option>
                    <option value={listaPuestos[4]}>{listaPuestos[3]}</option>
                </select>
                <label id='salario'>Salary: </label>
                <input type='text' onBlur={Ssalario} onChange={Ssalario} />

                <input type="button" value='Add offer' onClick={nuevoOffer} />
            </div>

        </div>
    );
}
export default AddOffers;