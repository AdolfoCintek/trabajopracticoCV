//Cerrar ventana certificado
document.getElementById("cerrar_certificado").addEventListener("click", function(){     
    document.getElementById("contenedor").style.display = 'block'; //Mostrar contenido inicial
    document.body.style.backgroundColor = 'white';//Color de fondo de página inicial
    document.getElementById("cerrar_certificado").style.display = 'none'; //Ocultar ícono de cierre
    //Ocultar todas las imágenes ampliadas
    const certif_ampliadas = document.getElementsByClassName("img_certif_ampliadas");
    for (let i = 0; i < certif_ampliadas.length; i++) {
        certif_ampliadas [i].style.display = 'none'; 
    }   
});



//Para abrir los certificados

//Certificado 1
document.getElementById("titulo_formacion_1").addEventListener("click", function(){     
    ocultarPaginaPrincipal();
    document.getElementById("img_ampliada_titulo_formacion_1").style.display = 'block'; //Mostrar certificado
}); 

//Certificado 2
document.getElementById("titulo_formacion_2").addEventListener("click", function(){     
    ocultarPaginaPrincipal();
    document.getElementById("img_ampliada_titulo_formacion_2").style.display = 'block'; //Mostrar certificado
}); 

//Certificado 3
document.getElementById("titulo_formacion_3").addEventListener("click", function(){     
    ocultarPaginaPrincipal();
    document.getElementById("img_ampliada_titulo_formacion_3").style.display = 'block'; //Mostrar certificado
}); 

//Certificado 4
document.getElementById("titulo_formacion_4").addEventListener("click", function(){     
    ocultarPaginaPrincipal();
    document.getElementById("img_ampliada_titulo_formacion_4").style.display = 'block'; //Mostrar certificado
}); 

//Certificado 5
document.getElementById("titulo_formacion_5").addEventListener("click", function(){     
    ocultarPaginaPrincipal();
    document.getElementById("img_ampliada_titulo_formacion_5").style.display = 'block'; //Mostrar certificado
}); 


function ocultarPaginaPrincipal(){
    document.getElementById("contenedor").style.display = 'none'; //Ocultar contenido
    document.getElementById("cerrar_certificado").style.display = 'block'; //Mostrar ícono de cierre
    document.body.style.backgroundColor = 'blue';//Cambio de color de fondo de página
}

 








