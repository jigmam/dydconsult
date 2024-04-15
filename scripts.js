function scrollIntoForm(id) {
  // Obtener el formulario por su ID
  var formulario = document.getElementById(id);

  // Desplazar la ventana para que el formulario sea visible
  formulario.scrollIntoView({ behavior: 'smooth' });
}

function enviarCorreo() {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("phone").value;
  ///var mensaje = document.getElementById("mensaje").value;

  var data = {
    name: nombre,
    lastname: apellido,
    email: email,
    phone: telefono
  }
  fetch('https://hook.us1.make.com/llinz6z5s6ommmu19av7b3jnmwd2czna', {
    method: 'POST', // o POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido que se envía (opcional)
      // Otras cabeceras (opcional)
    },
    body: JSON.stringify(data), // Datos a enviar en la solicitud (opcional)
  }).then(response => {
    // Aquí se maneja la respuesta del servidor
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsea la respuesta como JSON (o text(), blob(), etc.)
  })
    .then(data => {
      // Aquí se maneja la data obtenida
    })
    .catch(error => {
      // Aquí se manejan los errores
    });


}
document.addEventListener("DOMContentLoaded", function () {
  // Agrega un evento de clic al botón
  var botones = document.querySelectorAll(".info");

  // Itera sobre todos los botones y agrega un evento de clic a cada uno
  botones.forEach(function(boton) {
      boton.addEventListener("click", function() {
          // Obtén el formulario más cercano con la clase "miFormulario"
          scrollIntoForm("formid");
      });
  });
});
let service = {
  "Service4": {
    "title": "Consultoria en Desarrollo Organizacional",
    "img": "img/Consultoria.png",
    "subElements": [
      {
        "title": "",
        "description": "Diseño, ejecución, Asesoría y Evaluación de proyectos de cambio organizacional, alineados al marco estratégico de la empresa, que respondan a sus requerimientos y permitan capitalizar oportunidades presentas y futuras",
        "details": [
          "Visión – Misión – Valores",
          "Cultura Organizacional",
          "Coaching Individual y de Equipo",
          "Diagnóstico Clima Organizacional"
        ]
      }
    ]
  },
  "Service2": {
    "title": "Gestión de Talento Basada en Competencias",
    "img": "img/Gestion.png",
    "subElements": [
      {
        "title": "",
        "description": "",
        "details": [
          "Diseño Modelos de competencias Actitudinales y Técnicas",
          "Diseño Sistemas de Estimación, Calibración y Desarrollo de competencias",
          "Estimación Hi-Potencial",
          "DNA Basado en Competencias"
        ]
      }
    ]
  },
  "Service1": {
    "title": "Selección de Talento",
    "img": "img/Seleccion.png",
    "subElements": [
      {
        "title":"Head Hunter",
        "description": "",
        "details": [
          "Calidad desde el primer paso",
          "Eficiencia en tiempos y costo",
          "Flexibiliad",
          "Máximo valor añadido"
        ]
      },
      {
        "title":"Entrenamiento y Desarrollo",
        "description": "",
        "details": [
          "Diseño y Aplicación de Assessment Center",
          "Entrevistas de Eventos Conductuales",
          "Selección Exitosa de talento: 3 Pasos Clave"
        ]
      },
    ]

  },
  "Service3": {
    "title": "Programas de Desarrollo",
    "img": "img/Programas.png",
    "subElements": [
      {
        "title":"Programas",
        "description": "Diseñamos, Ejecutamos, Acompañamos y Evaluamos programas de entrenamiento para el desarrollo de competencias y procesos que impulsen el logro de los objetivos y los cambios organizacionales",
        "details": [
          "Desarrollo de Lideres",
          "Integrando Equipos de Alto Desempeño",
          "Sensibilización y Gestión del Cambio",
          "Rol Gerencial en los Procesos de Desarrollo de Talento"
        ]
      },
      {
        "title":"Talleres",
        "description": "Actividades para el desarrollo de habilidades específicas, con acompañamiento y retroalimentación de las aplicaciones y avances del participante.",
        
        "details": [
          "ConversAcciones",
          "Comunicación en equipo",
          "Trilogía de la Conexión: Indagar, Escuchar, Empatizar",
          "Liderazgo para Emprendedores",
          "Trabajo en Equipo"
        ]
      }
    ]
  }
}

// Función para cargar el contenido dinámico en el modal
function cargarContenido(servicio) {
  // Obtener el servicio del JSON
  var servicioData = service[servicio];

  // Actualizar el título del modal con el título del servicio
  var modalTitle = document.getElementById("serviceModalLabel");
  modalTitle.textContent = servicioData.title;

  // Actualizar la descripción del servicio en el cuerpo del modal
  // Actualizar la imagen del servicio en el cuerpo del modal
  var imagen = document.getElementById("imagenServicio");
  imagen.src = servicioData.img;
  imagen.alt = servicioData.title;

  // Limpiar cualquier contenido anterior en la lista de detalles
  var listaDetalles = document.getElementById("listaDetalles");
  listaDetalles.innerHTML = "";
  servicioData.subElements.forEach(function (subElements) {
    // Agregar cada detalle del servicio a la lista de detalles
    var detalleItem = document.createElement("p");
    detalleItem.classList  = ['modal-title text-success']
  
    detalleItem.textContent = subElements.title;
    listaDetalles.appendChild(detalleItem)
    detalleItem = document.createElement("p");
    detalleItem.classList  = ['modal-title text-white']
    detalleItem.textContent = subElements.description;
    listaDetalles.appendChild(detalleItem)
    detalleItem = document.createElement("lu");
    detalleItem.innerHTML = "";
    listaDetalles.appendChild(detalleItem);
    subElements.details.forEach(function (detalle) {
      var detalleItem = document.createElement("li");
      detalleItem.textContent = detalle;
      listaDetalles.appendChild(detalleItem);
    });
  });
}
