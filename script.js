const botonCambioEstilo = document.getElementById('botonEstilo');
const parrafoCambio = document.getElementById('parrafo')

botonCambioEstilo.addEventListener('click', () => {
    
    parrafoCambio.style.fontFamily = "'Courier New', Courier, monospace";
    parrafoCambio.style.color = "red";
    parrafoCambio.style.fontSize = "1.5rem"

})

const capturarFormulario = document.getElementById('form1');

capturarFormulario.addEventListener('submit', (evento) => {
    evento.preventDefault();            // esta línea evita que la página se recarge y se pierdan los datos en consola

    const datos = new FormData(capturarFormulario);

    console.log('Nombre: ', datos.get('fname'));
    console.log('Apellido: ', datos.get('lname'));

});

const botonMostrarEnlaces = document.getElementById('botonEnlaces');

botonMostrarEnlaces.addEventListener('click', () => {
    
    const enlaces = document.querySelectorAll('a');
    const todos = enlaces.length;
    const primer = enlaces[0].href;
    const ultimo = enlaces[enlaces.length-1].href

    alert(
        `Total enlaces: ${todos}\n` +
        `Primer enlace: ${primer}\n` +
        `Último enlace: ${ultimo}`
    );
})