import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
/* import  Promesa1 from'./functions/promesa1.jsx'
import MyPromises from './functions/promises.jsx'
import MyFunctions from './functions/promesaSum.jsx' 
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx' */
import MyFetchsAPIs from './functions/MyFetchs.jsx'
import MyFetchAPIss from './functions/MyFetchAPIs.jsx'
import MyFetchsPost from './functions/MyFetchPost.jsx'
import MyFetchAPIsp from './functions/MyFetchPut.jsx'
import MyFetchBlob from './functions/MyFetchsBlod.jsx'
import MyDataTypes from './methods/MyDtaTypes.jsx'
import MyObjects from './methods/MyObjects.jsx'
import { Contador } from './components/contador.jsx'
import { ContadorHook } from './components/ContadorHook.jsx'
import { Login } from './components/Login.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   <Login/>
    </StrictMode>,
    
)
