document.addEventListener("DOMContentLoaded", function(){   
    const boton = document.getElementById("crearBtn");

    function redirect() {
        window.location = "index.html";
    }
    
    let InputUsuario = document.getElementById("usuario");
    let InputPassword = document.getElementById("password1");
    let InputName = document.getElementById("nombre");
    
    // Para que el usuario sea un email
    InputUsuario.addEventListener('change', function(e) {
        const emailInput = document.getElementById('usuario');
        if (!emailInput.checkValidity()) {
          e.preventDefault(); // Previene el envío si el email es inválido
          alert('Ingrese un email válido para continuar');
        }
      });
      
      function validacion() {
        if (InputUsuario.checkValidity() && InputPassword.value.length > 0 && InputName.value.length > 0) {
            console.log("entra");
          sessionStorage.setItem("sesion", true);
          return true;
        } else {
            console.log("entraF");
          return false;
        }
      }
      
    
    
    function show (){
        if (validacion()){
            redirect();
            return true;
        } else {
            alert("Complete todos los campos para continuar");
            return false;
        }
    
    }
    
    
    
    boton.addEventListener('click', show);
    
    });