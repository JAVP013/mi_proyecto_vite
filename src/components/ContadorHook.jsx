
import { useCounter } from "./hooks/useCounter";

export const ContadorHook = () =>{
    /* const [valor, setValor] = useState(1);
    const acumular = (numero) =>{
        setValor(valor + numero);
    }; */
    const {valor, acumular} = useCounter(0);
    return(
        <>
        <div>   
            <h3>Contador Hook: <small>{valor}</small></h3>
         
            <button onClick={ () => acumular(1)}>Sumar (+1)</button>
            &nbsp;
            <button onClick={() => acumular(-1)}>Restar (-1)</button>
        
        </div>
        
        </>
    )
};