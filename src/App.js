import React from "react";


// REDUCER _________________________------------
const myCities={
  cities:[],
};



export const reducer=(state = myCities,action) => {
  //console.log(action.payload);
 
  switch (action.type){
   
    case ADD_CITY:
      return { ...state, cities:[ action.payload]};
    case REMOVE_CITY:
       
      return { cities: state.cities.filter(todo => todo.id !== action.payload)  } ;
  
    default:
      return state;
  }  
  
}

// ACTIONS -----------------------
// por como esta diseñado el test, el id de la ciudad deberian colocarla al momento de agregarlo en el reducer
export const ADD_CITY = "AddCity";
export const REMOVE_CITY = "RemoveCity";

export const addCity= (payload)=>{
  return  {
    type: ADD_CITY,
    payload: payload
  }
}

export const removeCity=(payload)=>{
  return {
    type: REMOVE_CITY,
    payload: payload
  }
}


 // COMPONENTE _--------------------
 // La idea es hacer una app donde uds mismos puedan ingresar una ciudad y renderizarlas en esta misma
 // hoja. Deberian hacer el form y renderizar lo que tendrian en el "estado local de redux"
 // la manera en la que pueden unir los componentes es al momento de agregar una ciudad es llamarlo de la siguiente
 // manera "onClick={reducer(EstadoActual,Accion(payload))}"
 // PARA QUE PASEN LOS TESTS ES NECESARIO USAR React.useState en lugar de useState solo
 // Recuerden que la idea es practicar y tener conceptos claros, con que entiendan los tests y sientan que entendieron
 // es suficiente.
export const App=() => {

  return (
    
      <form>
        <input name = "city"  /> 
        <textarea name= "location"/> 
        <input name = "temperatura" /> 
        <button type = "submit">Enviar</button>
      </form>
    
  )

}

export default App;
