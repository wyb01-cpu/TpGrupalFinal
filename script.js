
let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let dni=document.getElementById("dni");
let telefono=document.getElementById("telefono");




//SUBMIT DEL FORMULARIO INSCRIPCION
$("#formInscripcion").on("submit", function(e){
              
    // Cancelamos el evento del submit, queda estatico
    e.preventDefault();
    document.getElementById("inscripcion").style.display="none";
    document.getElementById("confirm").style.display="block";
    let titleMensaje = document.getElementById("card-titulo").innerHTML;
    let inicioCurso = document.getElementById("card-li-5").innerHTML;
    let modalidad = document.getElementById("card-li-1").innerHTML;
    let encuentros = document.getElementById("card-li-3").innerHTML;
    document.getElementById("mensajeConfirm").innerHTML="Estas seguro que quieres registrarte en el curso de "+titleMensaje+"?";
    document.getElementById("mensajeInfo").innerHTML=inicioCurso+"<br/>"+modalidad+"<br/>"+encuentros;
});


const atras = () =>{
    document.getElementById("inscripcion").style.display="block";
    document.getElementById("confirm").style.display="none";
}

const aceptar = () =>{
    document.getElementById("confirm").style.display="none";
    document.getElementById("mensaje").style.display="block";
}


//SE ACTIVA CUANDO CIERRA EL MODAL INSCRIPCION [JQUERY]
$("#modalInscripcion").on("hidden.bs.modal", function () {

    $("#mensaje").css("display", "none");
    $("#confirm").css("display", "none");
    $("#inscripcion").css("display", "block");
    $("#nombre").val("");
    $("#apellido").val("");
    $("#dni").val("");
    $("#email").val("");
    $("#telefono").val("");
});


//ARRAY OBJETOS [INFORMACION DE LOS CURSOS]
let cursos = [
    {
        imagen : "https://i.imgur.com/kN6KtKB.png",
        altImg : "imgPhotoshop",
        titulo : "<strong>Photoshop</strong>",
        text : "En este curso de Photoshop aprenderás a editar imagenes y fotografías, así como realizar retoques digitales de manera profesional. Por lo tanto, aprenderás a utilizar la interfaz y las herramientas que facilitan la creación y edición de imágenes: panel de capas, selección y transformación, filtros, objetos inteligentes, y mucho más.",
        li1 : "<strong>Modalidad:</strong> Online",
        li2 : "<strong>Duracion:</strong> 3 meses.",
        li3 : "<strong>Encuentros:</strong> 1 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 4GB de memoria RAM y un microprocesador Intel Core i3",
        li5 : "<strong>Inicia:</strong> Miercoles 26 de Abril de 18:00 a 20:00hs",
    },

    {
        imagen : "https://i.imgur.com/PZxWmoW.png",
        altImg : "imgIllustrator",
        titulo : "<strong>Illustrator</strong>",
        text : "Aprenderás a usar el Poder de Adobe Illustrator CC, uno de los software más amplios, potentes y usado en el mercado de las artes gráficas, la publicidad y la ilustración. En este curso aprenderás Illustrator desde lo más básico hasta los pasos más avanzados, desde hacer formas hasta crear diseños más complejos como un afiche, un aviso de revista y la papelería corporativa de una empresa.",
        li1 : "<strong>Modalidad:</strong> Presencial",
        li2 : "<strong>Duracion:</strong> 2 meses.",
        li3 : "<strong>Encuentros:</strong> 2 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 4GB de memoria RAM y un microprocesador Intel Core i3",
        li5 : "<strong>Inicia:</strong> Lunes 15 de Marzo de 17:00 a 19:00hs.",
    },
    {
        imagen : "https://i.imgur.com/9GKy2dt.png",
        altImg : "imgPython",
        titulo : "<strong>Python</strong>",
        text : "Bienvenidos a este curso de Python Paso a Paso, el mismo ha sido confeccionado para introducir a aquellas personas que nunca han tenido contacto con un lenguaje de programación en los conceptos más básicos del lenguaje, desde cómo realizar la instalación, cómo utilizar un editor de texto o realizar el seguimiento de errores en el código desarrollado. Durante este curso nos familiarizaremos con lo básico del lenguaje tratando de contestar a las preguntas más habituales que los nuevos alumnos pueden tener.",
        li1 : "<strong>Modalidad:</strong> Presencial",
        li2 : "<strong>Duracion:</strong> 4 meses.",
        li3 : "<strong>Encuentros:</strong> 3 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 1GB de memoria RAM y un microprocesador Intel Core i3",
        li5 : "<strong>Inicia:</strong> Lunes 26 de Marzo de 16:00 a 18:00hs.",
    },
    {
        imagen : "https://i.imgur.com/9CyLOS3.png",
        altImg : "imgJava",
        titulo : "<strong>Java</strong>",
        text : "En este curso de Java aprenderás a dominar este lenguaje de programación desde cero a experto, lo cual te permitirá crear aplicaciones de escritorio siguiendo las buenas prácticas de programación en Java.Durante el estudio de este curso de Java desarrollarás un sistema de ventas para una farmacia, el cual es un proyecto similar a muchos que encontrarás frecuentemente en tu camino como programador.",
        li1 : "<strong>Modalidad:</strong> Online",
        li2 : "<strong>Duracion:</strong> 5 meses.",
        li3 : "<strong>Duracion:</strong> 5 meses.",
        li4 : "<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 2GB de memoria RAM y un microprocesador Intel Core i3",
        li5 : "<strong>Inicia:</strong> Jueves 20 de Mayo de 15:00 a 17:00hs.",
    },
    {
        imagen : "https://i.imgur.com/aa3VpMV.png",
        altImg : "imgJavascript",
        titulo : "<strong>Javascript</strong>",
        text : "JavaScript es un lenguaje de programación de páginas web de lado del cliente: cuando estamos viendo una página que utiliza JavaScript, hemos descargado el código a nuestro navegador y este lo ejecuta de acuerdo con las acciones realizadas en la página. El Objetivo general es conocer Javascript desde un punto de vista práctico y, al mismo tiempo, utilizar varias herramientas para dotar de dinamismo y funcionalidad a los sitios web en html.",
        li1 : "<strong>Modalidad:</strong> Online",
        li2 : "<strong>Duracion:</strong> 6 meses.",
        li3 : "<strong>Encuentros:</strong> 1 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Solo necesitarás una computadora con al menos 2GB de memoria RAM y un microprocesador Intel Core i3",
        li5 : "<strong>Inicia:</strong> Miercoles 15 de Mayo de 14:00 a 16:00hs.",
    },
    {
        imagen : "https://i.imgur.com/yl4JLWQ.png",
        altImg : "imgIngles",
        titulo : "<strong>Ingles</strong>",
        text : "En el curso se desarrollan las cuatro macrohabilidades de la lengua: comprensión y producción oral (Listening and Speaking) y comprensión y producción escrita (Reading and Writing). El enfoque es comunicativo, ya que se aprende con un fin de comunicación auténtica en contextos sociales, laborales y de viajes.",
        li1 : "<strong>Modalidad:</strong> Presencial",
        li2 : "<strong>Duracion:</strong> 4 meses.",
        li3 : "<strong>Encuentros:</strong> 2 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Conocimientos basicos del ingles",
        li5 : "<strong>Inicia:</strong> Martes 10 de Marzo de 14:00 a 16:00hs.",
    },
    {
        imagen : "https://i.imgur.com/SookX1Y.png",
        altImg : "imgItaliano",
        titulo : "<strong>Italiano</strong>",
        text : "El  curso de italiano proponen un enfoque comunicativo a través del desarrollo de habilidades orales y escritas desde los niveles iniciales. Los programas están dirigidos al uso auténtico de la lengua actual en un ambiente distendido donde se aborda la cultura italiana en su sentido más amplio.",
        li1 : "<strong>Modalidad:</strong> Presencial",
        li2 : "<strong>Duracion:</strong> 4 meses.",
        li3 : "<strong>Encuentros:</strong> 2 encuentro semanal.",
        li4 : "<strong>Requisitos:</strong> Ninguno",
        li5 : "<strong>Inicia:</strong> Jueves 18 de Marzo de 15:00 a 17:00hs.",
    }
]


const mostrarCurso = (indice) =>{

    document.getElementById("card-imagen").src=cursos[indice].imagen;
    document.getElementById("card-imagen").alt=cursos[indice].altImg;
    document.getElementById("card-titulo").innerHTML= cursos[indice].titulo;
    document.getElementById("card-text").innerHTML = cursos[indice].text; 

    document.getElementById("card-li-1").innerHTML= cursos[indice].li1;
    document.getElementById("card-li-2").innerHTML= cursos[indice].li2;
    document.getElementById("card-li-3").innerHTML= cursos[indice].li3;
    document.getElementById("card-li-4").innerHTML= cursos[indice].li4;
    document.getElementById("card-li-5").innerHTML= cursos[indice].li5;
}



//-----RECLAMOS----
//SUBMIT DEL FORMULARIO RECLAMO
$("#formReclamo").on("submit", function(e){
              
    // Cancelamos el evento del submit, queda estatico
    e.preventDefault();

    document.getElementById("formularioReclamo").style.display="none";
    document.getElementById("confirmacionReclamo").style.display="block";


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let reclamo = document.getElementById("reclamo").value;
    let motivo = document.getElementById("motivo").value;
    document.getElementById("textReclamo").innerHTML="<h5><strong>Informacion del usuario</strong></h5><strong>Nombre Completo: </strong>"+apellido+" "+nombre+"<br><strong>Telefono: </strong>"+telefono+"<br><strong>Titulo del Reclamo: </strong>"+reclamo+"<br><strong>Detalle del reclamo: </strong>"+motivo
});


const atrasReclamo = () =>{
    document.getElementById("confirmacionReclamo").style.display="none";
    document.getElementById("formularioReclamo").style.display="block";
    
}

const aceptarReclamo = () =>{
    document.getElementById("confirmacionReclamo").style.display="none";
    document.getElementById("mensajeReclamo").style.display="block";

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numero = Math.floor(Math.random() * (1000 - 1) + 1);

    document.getElementById("infoReclamo").innerHTML="Estimado <strong>"+apellido+" "+nombre+"</strong>, nos pondremos en contacto via telefonica o email en los proximos dias para solucionar sus inconvenientes lo mas rapido posible.<br><strong>Numero de Reclamo: </strong>"+numero;
}





//-----CONTACTO----
//SUBMIT DEL FORMULARIO CONTACTO
$("#formContacto").on("submit", function(e){

    console.log("entro");
              
    // Cancelamos el evento del submit, queda estatico
    e.preventDefault();

    document.getElementById("formularioContacto").style.display="none";
    document.getElementById("confirmacionContacto").style.display="block";


    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    document.getElementById("textContacto").innerHTML="<h5><strong>Informacion a enviar</strong></h5><strong>Nombre Completo: </strong>"+nombre+"<br><strong>Telefono: </strong>"+telefono+"<br><strong>Email: </strong>"+email+"<br><strong>Mensaje: </strong>"+mensaje;
});


const atrasContacto = () =>{
    document.getElementById("confirmacionContacto").style.display="none";
    document.getElementById("formularioContacto").style.display="block";
    
}

const aceptarContacto = () =>{
    document.getElementById("confirmacionContacto").style.display="none";
    document.getElementById("mensajeContacto").style.display="block";

    let nombre = document.getElementById("nombre").value;
    document.getElementById("infoReclamo").innerHTML="<strong>Enviado!</strong><br>"+nombre+" recibimos tu mensaje<br/>¡Gracias por tu interes! ";
}


const findMe = () =>{
			
    var output = document.getElementById('map');

    // Verificar si soporta geolocalizacion
    if (navigator.geolocation) {
        output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
    }else{
        output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
    }

    //Obtenemos latitud y longitud
    function localizacion(posicion){

        var latitude = -33.13219730527238;
        var longitude = -64.34683857050526;

        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyAnfnLas7F0ddZ0Btb71B-MHiwMVDFM8jo";

        output.innerHTML ="<img src='"+imgURL+"'>";

        

    }

    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

    }

    navigator.geolocation.getCurrentPosition(localizacion,error);

}