//SCRIPT DE LOS BOTONES RADIO DEL FORM AL MOMENTO DE REGISTRARSE
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

//SCRIPT DE LA BUSQUEDA EN NOTICIAS
