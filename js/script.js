document.addEventListener("DOMContentLoaded", function(){

    const dataURL = `https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10`;
    const contenedor = document.getElementById('contenedor');
    const boton = document.getElementById('generador');

    if (!sessionStorage.getItem("sesion")){
        alert("Detectamos que no iniciaste sesión, redirigiendo para iniciar sesión");
        window.location = "login.html";
    }


/*función para mostrar chiste, contemplando los chistes simples y los de remate*/
    function mostrarChiste (url){
        ocultarChiste ();
        let j;
        if (!localStorage.getItem("chiste")){
            j = -1  /*si no existe, le asigno un valor por fuera del rango*/
        } else {
            j = localStorage.getItem("chiste"); /*si existe, tomo el valor del chiste para no repetirlo*/
        }
        let i = chisteAleatorio (url, j);   /*numero aleatorio, distinto al anterior*/
        localStorage.setItem("chiste", i);  /*guardo numero para no repetirlo*/
        let chiste = url.jokes[i]           
        if (chiste.type == "twopart"){
            let premisa = document.createElement("p");
            premisa.className = "premisa";
            premisa.appendChild(document.createTextNode(chiste.setup));
            contenedor.appendChild(premisa);
            let remate = document.createElement("p");
            remate.className = "remate";
            remate.appendChild(document.createTextNode(chiste.delivery));
            contenedor.appendChild(remate);
        }
        if (chiste.type == "single"){
            let remate = document.createElement("p");
            remate.className = "remate";
            remate.appendChild(document.createTextNode(chiste.joke));
            contenedor.appendChild(remate);
        }

    }

/*función para ocultar el chiste que se visualiza en pantalla*/
    function ocultarChiste (){
        contenedor.innerHTML = "";
    }

/*función recursiva para generar un número aleatorio entre 0 y el máximo según el tamaño del arreglo distinto al pasado por parámetro*/
    function chisteAleatorio (url,j) {
        console.log("entra")
        let m = Math.floor(Math.random() * (url.amount-1))
        while (m == j){
            m = chisteAleatorio (url, j); /*recursión*/
        }
        return m
        }

    
/*función para acceder a la API*/
    function generar () {
        fetch(dataURL)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            return mostrarChiste(datos);
        })
        .catch(error => {
            console.error ("Ocurrió error", error);
        });
      }
           
/*evento en el boton de generar*/ 
    boton.addEventListener("click",  () => generar());    
    });

      
      
    
    