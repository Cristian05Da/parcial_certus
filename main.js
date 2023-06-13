/* Agregar el escucha de evento a los botones */

let botones = document.querySelectorAll("article > button");

/* blucle para  */

for (let index = 0; index <botones.length; index++){
    botones[index].addEventListener("click",agragerCarrito,false);

}


/* funcion  */
function agragerCarrito (e){
    /* consultar el contenido de carrito de compras */
   
    if(document.querySelector("#carritovacio")){
        document.querySelector("#carritovacio").remove();
        document.querySelector("#carrito > figcaption").remove();
    }

    /* obtener el elemento  */
    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;
    /* sacar informacion */
    let titulo = elementoPadre.querySelector("h3").innerHTML;
    let parrafo = elementoPadre.querySelector("p").innerHTML;
    
    /* agregar informacion al carrito */
    let nuevoelemento =  document.createElement("div");
    nuevoelemento.innerHTML = "<div><h3>"+titulo+"</h3><p>"+parrafo+"</p></div>";
    document.querySelector("#carrito").append(nuevoelemento);
    alert("se agrego al carrito")
}