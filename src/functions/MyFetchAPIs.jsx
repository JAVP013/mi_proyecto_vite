function MyFetchAPIss() {
    function fcnXMLHttpRequest() {
        console.log("¡Execute GET API by XMLHttpRequest!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true );
        request.send(null);
       
        return new Promise(function(resolve, reject){
       
            request.onreadystatechange = function( state ){
           
                if (request.readyState === 4) {
                    //la respuesta obtiene un string.
                    var resp = request.response;
                    //ahora transformamos la cadena en formato
                    var respObj = JSON.parse(resp);
                    //enviamos el resultado a la consola.
                    //console.log( respObj );
                    //obtenemos solo la pagina actual.
                    //console.log( respObj.page);
                    //obtenemos solo la data de los usuarios.
                    //console.log( respObj.data);
                    resolve(respObj.data);
                };       
          };
        });
    };
  //*** Principal Code ***//
  //Call local function for execute GET API
  //with XMLHttpRequesnt Class
  fcnXMLHttpRequest()
  fetch('https://reqres.in/api/users')
  .then(resp => resp.json())
  .then(respObj => {
      console.log(respObj);
      console.log(respObj.page);
      console.log(respObj.per_page);
      console.log(respObj.data);
});
  
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchAPIss;