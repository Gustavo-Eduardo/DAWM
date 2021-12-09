var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

//SCRIPT DE LOS BOTONES RADIO DEL FORM AL MOMENTO DE REGISTRARSE - register.html
if(page=='register.html'){
    let radioComprar = document.getElementById('comprar')
    radioComprar.onchange = function(){
        console.log('comprar')
        document.getElementById('registro').setAttribute('action','index-cliente.html')
        let habilita = document.getElementsByClassName('habilitaC')
        for(let h of habilita){
            let clase = h.getAttribute('class')
            if(clase.includes('d-none')){
                h.setAttribute('class',clase.substring(0,clase.length-7))
            }
            console.log(h.getAttribute('class'))
        }
        let deshabilita = document.getElementsByClassName('habilitaV')
        for(let h of deshabilita){
            let clase = h.getAttribute('class')
            if(!clase.includes('d-none')){
                h.setAttribute('class',clase+' d-none')
            }
            console.log(h.getAttribute('class'))
        }
        
    }

    let radioVender = document.getElementById('vender')
    radioVender.onchange = function(){
        console.log('vender')
        document.getElementById('registro').setAttribute('action','index-empresa.html')
        let habilita = document.getElementsByClassName('habilitaV')
        for(let h of habilita){
            let clase = h.getAttribute('class')
            if(clase.includes('d-none')){
                h.setAttribute('class',clase.substring(0,clase.length-7))
            }
            console.log(h.getAttribute('class'))
        }
        let deshabilita = document.getElementsByClassName('habilitaC')
        for(let h of deshabilita){
            let clase = h.getAttribute('class')
            if(!clase.includes('d-none')){
                h.setAttribute('class',clase+' d-none')
            }
            console.log(h.getAttribute('class'))
        }
    }
}

//SCRIPT DEL LOGIN
if(page=='login.html'){
    function updateUsers(){
        users = []
        fetch('../data/users.json')
            .then(response => response.json())
            .then(data => {
                /*window.alert('aaaaaaaa')
                window.alert(data[0].user)*/
                elements.forEach(element => {
                    users += element  
                    window.alert(element)                    
                });
            })
        return users
    }
    document.querySelector("#session").addEventListener('click',function(){        
        let usuarios = updateUsers();
        
        let correo = document.getElementById('email').value;
        let contrasena = document.getElementById('password').value;
        
        if(correo == 'cliente@hotmail.com' && contrasena == '1'){            
            window.alert("Usted es un Cliente")
            document.getElementById('inicioSesion').setAttribute('action','index-cliente.html')
        }else if(correo == 'empresa@hotmail.com' && contrasena=='2') {            
            window.alert("Usted es un Empresa")
            document.getElementById('inicioSesion').setAttribute('action','index-empresa.html')
        }else if(correo == 'admin@hotmail.com' && contrasena=='0') {            
            window.alert("Usted es un Administrador")
            document.getElementById('inicioSesion').setAttribute('action','index-admin.html')
        } else {
            window.alert("Los datos ingresados son incorrectos.\nInténtelo nuevamente.")     
        }
    });
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