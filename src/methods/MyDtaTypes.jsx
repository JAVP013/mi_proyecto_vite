function MyDataTypes(){

   

    let IdNombre = 'Jose';
    IdNombre = 706;

   console.log("IdNombre: ",IdNombre);

 const FicNombre = "Francisco";
const FicApellidos= "Ibarra Carlos"
const FicNumControl = 706;
const FicNumControl2 = 1074;
const FicFechaReg = new Date();
let FicExperiencia = 20;
let FicActivo= true;
    return(
   <>
   
   <div>
    <h1>Programa para conocer diferentes Tipos de datos

    

    </h1>
    <h1>
        {IdNombre}
    </h1>

        

 <h1>
 {FicNombre}
 </h1>
        
        
<h1>
{FicApellidos}
</h1>
        
        
<h1>
{FicNumControl}
</h1>
        
        
<h1>
{FicNumControl2}
</h1>
        
        
<h1>
{FicFechaReg}
</h1>
       
        

<h1>
{FicExperiencia}
</h1>
       
        

<h1>
{(FicActivo) ? 'Activo' : 'No activo'}

</h1>
    

    
   </div>
   
   </>

    );

};
export default MyDataTypes