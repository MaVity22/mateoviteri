import './App.css';
import JobOffers from './components/JobOffers';
import AddOffers from './components/AddOffers';
import DetailOffer from './components/DetailOffer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {

  // Vector con los objetos Job
  const [ListaJob, setListaJob] = useState([
    {id: 1, Job: "Frontend developer", salary: 3000},
    {id: 2, Job: "Backend developer", salary: 2000},
    {id: 3, Job: "DevOps", salary: 3000},
    {id: 4, Job: "Fullstack developer", salary: 5000}
  ]); 
  
  // Función para agregar job
  const nuevoJob = (nuevo) => {
    ListaJob.push(nuevo);
  }

  // Funcion para obtener el Job por su id
  const getOffer = (iden) =>{
    for(var j of ListaJob){
      if(j.id == iden){
        return j;
      }
    }
  }
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/api/offers' element={<JobOffers lista={ListaJob} />}></Route>
            <Route path='/api/offer/new' element={<AddOffers agregar={nuevoJob} lista={ListaJob}/>}></Route>
            <Route path="/api/offer/:id" element={<DetailOffer obtener={getOffer}/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
