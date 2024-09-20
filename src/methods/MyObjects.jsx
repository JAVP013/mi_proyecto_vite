function MyObjects(){


    const persona = {
        nombre: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'Conocido No. 533'
        }
    }

console.log("JSON Persona:", JSON.stringify(persona,null,2));

    return(
    <>
    <div>
 <h1>Programas de objetos literales</h1>
 <code>
     {/*JSON.stringify(persona)*/}  
    {JSON.stringify(persona,null,2)}
 </code>
    </div>
    
    </>
    )
};

export default MyObjects