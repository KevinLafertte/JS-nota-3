



document.getElementById('bienvenida').addEventListener('click', function(){

    let nombre = document.getElementById('bienvenidaInput').value;

    let bienvenidaNombre = ("Mucho gusto " + nombre + ". Bienvenida a la demo circo con javaScript");

    document.getElementById('bienvenidaNombre').innerText = bienvenidaNombre

    document.getElementById('bienvenidaInput').style.display = 'none';

  });



  $('#infoNavegador').click(function() {
    const info = 
        'Navegador: ' + navigator.userAgent + '<br>' +
        'Plataforma: ' + navigator.platform + '<br>' +
        'Lenguaje: ' + navigator.language + '<br>' +
        'Online: ' + navigator.onLine + '<br>' +
        'Cookie habilitada: ' + navigator.cookieEnabled + '<br>' +
        'URL actual: ' + window.location.href + '<br>' +
        'Host: ' + window.location.host + '<br>' +
        'Protocolo: ' + window.location.protocol;
        

    $('#infoNavegadorResultado').html(info);

    $('.parrafoDispositivo').hide();

});




document.getElementById('pluton').addEventListener('click', function() {

  let jupiter = document.getElementById("jupiter");
  let jupiterParrafo = document.getElementById("jupiterParrafo");


  jupiter.textContent = "Jupiter";
  jupiterParrafo.textContent = "Mucho mejor, ¿no?. Jupiter es precioso";

  document.getElementById('cambiarJupiter').src = 'assets/img/jupitercambio.jpg';

});



let ventana;

document.getElementById('ventana').addEventListener('click', function() {

  ventana=window.open("https://hubblesite.org/home", "NewWindow",
    "status=yes, resizable=yes, width=756, height=491, left=378, top=245")

    setTimeout((windowsClose), 7000)

});

function windowsClose(){
  ventana.close()
  location.href="https://docs.google.com/spreadsheets/d/1oglYmFHSyWeYI5nCe1XlNAhEMeksOWHO5K-MSHtWjgA/edit?gid=0#gid=0"
  
}





$(document).ready(function() {



  $('#animacion').click(function() {

      $('.tierra').css({
          transform: 'translate(120px, 50%) matrix(0.2, 0.3, 0.1, 0.2, 0.2, 0.2)'
      });

      $('.marte').css({
        transform: 'translate(280px, -60%) matrix(0.2, 0.1, 0.0, 0.1, 0.1, 0.1)'
      });

    $('.jupiter').css({
      transform: 'translate(100px, -150%) matrix(0.2, 0.3, 0.1, 0.2, 0.2, 0.2)'
     });

    $('.saturno').css({
      transform: 'translate(100px, 80%) matrix(0.2, 0.1, 0.0, 0.1, 0.1, 0.1)'
     });

    $('.urano').css({
      transform: 'translate(400px, 60%) matrix(0.2, 0.3, 0.1, 0.2, 0.2, 0.2)'
     });

     $('.neptuno').css({
      transform: 'translate(-500px, -100%) matrix(0.2, 0.3, 0.1, 0.2, 0.2, 0.2)'
     });


     $('.tierra, .marte, .jupiter, .saturno, .urano, .neptuno').fadeOut(12000, function() {
      $('#mensajeNuevo').html('¡HAZ DESINTEGRADO A TODO EL SISTEMA SOLAR!').fadeIn();
  });


  });


});




document.getElementById('botonEdad').addEventListener('click', function() {

  let edadInput = document.getElementById('edadInput').value;


  if (!isNaN(edadInput) && edadInput !== '') {

      let anosRestantes = 95 - parseInt(edadInput);
      let diasRestantes = anosRestantes * 365;
      let semanasRestantes = anosRestantes * 52;
      let mesesRestantes = anosRestantes * 12;

    
      let resultadoEdad = ("Te quedan " + diasRestantes + " días, " + semanasRestantes + " semanas, y " + mesesRestantes + " meses para llegar a los 95 años.");

     
      document.getElementById('resultadoEdad').innerText = resultadoEdad;
  } else {
     
      document.getElementById('resultadoEdad').innerText = "Por favor ingresa una edad válida.";
  }

  document.querySelector('.offcanvas-title').style.display = 'none';

});








const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}



document.getElementById('liveToastBtn').addEventListener('click', function() {

  setTimeout(function() { toastLiveExample.innerHTML = "Ya se ha ido :(. Espero hayas pedido un deseo."}, 3000);

});



let contenedorJson = document.getElementById('llamadoJson');
let botonJson = document.getElementById('botonJson');

botonJson.addEventListener('click', function() {
    $.get({
        url: 'fotos.json',
        dataType: 'json',
        success: function(data) {
            let html = '<div class="row mx-auto">';
            $.each(data, function(index, fotos) {
                html += `
                    <div class="col-md-4 mb-4">
                        <div class="card text-center">
                            <img src="${fotos.foto}" data-fancybox="galeria" class="card-img-top img-fluid"  alt="${fotos.nombre}">
                            <div class="card-body">
                                <h4 class="card-title"><strong>${fotos.nombre}</strong></h4>
                                <h6 class="card-text"><strong>${fotos.descripcion}</strong></h6>
                            </div>
                        </div>
                    </div>
                `;
                
            });
            html += '</div>';
            contenedorJson.innerHTML = html;
        },
        error: function() {
            console.error('Error al cargar las fotos:');
            contenedorJson.innerHTML = '<p>Error al cargar las fotos.</p>';
        }
    });
});


Fancybox.bind("[data-fancybox]");

AOS.init();




