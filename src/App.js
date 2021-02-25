import React from "react";
import './index.css';
import './App.css';

//import { addCity } from './App'




// REDUCER _________________________------------
const myCities={
  cities:[],
};


let id=0;
export const reducer=(state = myCities,action) => {
  //console.log(action.payload);
 
  switch (action.type){
   
    case ADD_CITY:
      id++
      action.payload.id = id
      return {
        cities: state.cities.concat(action.payload)
      }
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
//let id= 1;
export const addCity= (payload)=>{
  return  {
    type: ADD_CITY,
    payload
 
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
  const [input, setInput] = React.useState({
    city :"",
    location : "",
    temperatura : ""
  });
  function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
  }

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
     
      <form onSubmit={handleSubmit} className = "App">
          <input 
            type="text" 
            name = "city" 
            value ={input.city} 
            onChange = {handleChange} 
            placeholder= "Ciudad..."
          /> 
                    
          <textarea type="text" 
            name= "location" 
            value ={input.location} 
            onChange = {handleChange}
            placeholder = "Location..."
          /> 
         
          <input 
            type="text" 
            name = "temperatura" 
            value ={input.temperatura} 
            onChange = {handleChange}
            placeholder = "Temperature..."
          /> 
         
          <button type = "submit"><span>Enviar</span></button>
      </form>
      
  )
 
  }
export default App;
// function mapDispatchToProps (dispatch) {
//   return {
//     addCity,
//     removeCity
//   }
// }

// export default connect(null, mapDispatchToProps)(App)
