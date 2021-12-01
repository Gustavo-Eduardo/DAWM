var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

//SCRIPT DE LOS BOTONES RADIO DEL FORM AL MOMENTO DE REGISTRARSE - register.html
if(page=='register.html'){
    let radioComprar = document.getElementById('comprar')
    radioComprar.onchange = function(){
        console.log('comprar')
        document.getElementById('registro').setAttribute('action','index-cliente.html')
    }

    let radioVender = document.getElementById('vender')
    radioVender.onchange = function(){
        console.log('vender')
        document.getElementById('registro').setAttribute('action','index-empresa.html')
    }
}
//SCRIPT DE LA BUSQUEDA EN NOTICIAS - noticias.html
if(page=='noticias.html'){
    let input = document.getElementById('iBusquedaNoticias');
    input.addEventListener("keyup", (event)=>{
        let input = document.getElementById("iBusquedaNoticias").value;
        console.log(input);
        let col = document.querySelectorAll(".sample-text-area")
        for(c of col){
            let titulo = c.querySelector(".text-heading")
            let descripcion = c.querySelector(".sample-text")
            console.log(titulo);
            console.log(descripcion);
            let clase = c.getAttribute("class");
            console.log(clase);
            if(!titulo.innerHTML.includes(input)  & !descripcion.innerHTML.includes(input)){
                c.setAttribute("class",clase+" d-none")          
            }else{
                c.setAttribute("class",clase.replace(" d-none",""))
            }
        }
    })
}