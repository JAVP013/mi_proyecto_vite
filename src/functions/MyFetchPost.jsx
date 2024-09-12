//creamos la function

function MyFetchsPost(){

//Declaramos el objeto 
let usuario = {
    nombre: 'Aitana',
    edad: 25
}
fetch('https://reqres.in/api/user', {
    method: 'POST',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API POST');
    console.log(error);
});

    return(
    <>
    <div>
     <h1>

      Programa fetchs api post

     </h1>



    </div>
    
    
    </>
    );
};
export default MyFetchsPost;