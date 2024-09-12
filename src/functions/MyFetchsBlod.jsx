function MyFetchBlob(){
    
    //imagen de la pagina index.html 
let img1 = document.getElementById("IdImg1");
let img2 = document.getElementById("IdImg2");

    fetch('images/pwa-01.png')
    .then(resp => resp.blob())
    .then(image => {
        console.log(image);
        var imgPath1 = URL.createObjectURL(image);
        img1.src = imgPath1;
    });
    
    fetch('images/pwa-02.png')
    .then(resp => {
        return resp.blob();
    })
    .then(image => {
        console.log(image);
        var imgPath2 = URL.createObjectURL(image);
         img2.src = imgPath2;
    });
    return(
      <>
      <div>
        <h1>
            Progema para fetchs api blod
            </h1>
      </div>
      
      
      </>


    );
};


export default MyFetchBlob;