import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

//Crear (Base de dato inicial 'HardCode')
const initialDb = [
   {
    id: 1,
    name: "Seiya",
    constellation:"Pegaso"
   },
   {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón"
   },
   {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne"
   },
   {
    id: 4,
    name: "Shun",
    constellation:"Andrómeda"
   },
   {
    id: 5,
    name: "Ikki",
    constellation:"Fénix"
   },
];

//Creamos nuestro componente
const CrudApp = () => {

    const [ db, setDb] = useState(initialDb);

    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        //Crear un id para que no quede null
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map(e => e.id === data.id ? data : e);
        setDb(newData)
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estás seguro de querer borrar el registro ${id}?`);

        if(isDelete) { 
            let newData = db.filter(e => e.id !== id);
            setDb(newData)
         } else {
             return
         }
    };

    return(
    <>
    <div>
        <h2>Crud App Falso</h2>
          <article className= "grid-1-2">
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
          </article>
    </div>
    </>
    )
};

export default CrudApp