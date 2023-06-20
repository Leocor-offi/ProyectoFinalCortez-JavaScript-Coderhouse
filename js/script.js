import convertFiatToFiat from './exchange.js'

let rateARS = await convertFiatToFiat(1, 'USD', 'ARS');

let monedaValue = 1
let monedaText = 'ARS'


class crucero {
    constructor(nombre, precioARS, id, img1, duracion, descripcion) {
        this.nombre = nombre;
        this.precioARS = precioARS;
        this.id = id;
        this.img1 = img1;
        this.duracion = duracion;
        this.descripcion = descripcion;
        this.personas = 0;
        this.precioUSD = (precioARS / rateARS);
    }
}


let cruceros = [];


function crucerosPush() {
    cruceros.push(new crucero('Isla Media Luna', 687200, 1, 'Isla Media Luna.jpg', '12 días', 'La Isla de la Media Luna de la Antártida, una de las Islas Shetland del Sur, está situada en el estrecho de McFarlane. En ella se encuentra la estación de investigación argentina Base Cámara. Durante nuestros desembarcos en la Isla de la Media Luna, es posible que veamos focas de Weddell, pingüinos de barbijo y otra fauna antártica.'));
    cruceros.push(new crucero('Cataratas de Sangre', 492000, 2, 'Cataratas de Sangre.jpg','13 días', 'Observadas a primera vista, las cataratas de sangre del glaciar Taylor, en la Antártida Oriental, se asemejan a un animal gigantesco destripándose lentamente. Un extraño y perturbador líquido rojo, de tonalidad muy similar a la que posee la sangre brota del interior del hielo y se desparrama sobre el lago Bonney, dejando a su rastro una inmensa salpicadura de heridas metafóricas, de “cicatrices sobre la piel de la bestia”.'));
    cruceros.push(new crucero('Monte Erebus', 486000, 3, 'Monte Erebus.jpg','13 días', 'El volcán Erebus, en la Antártida, es el volcán activo más austral de la Tierra. Tiene una altitud de 3794 metros y está localizado en la isla de Ross, que también tiene otros tres volcanes activos, entre ellos el Monte Terror. Esta montaña forma parte del Cinturón de Fuego del Pacífico, que incluye 1600 volcanes activos.Se ha observado que este volcán ha estado continuamente activo desde 1972, y en sus inmediaciones se encuentra el Observatorio del Volcán Monte Erebus, dirigido por el Instituto de Tecnología y Minería de Nuevo México (New Mexico Tech). Es uno de los tres volcanes de la Antártida (junto a la isla Decepción y a la isla Buckle) en donde se han observado erupciones.'));
    cruceros.push(new crucero('Estrecho de Gerlache', 81000, 4, 'Estrecho de Gerlache.jpg','11 días', 'Uno de los mejores lugares para avistar icebergs y ballenas cerca de la Península Antártica, esta extensa vía de agua es una de las favoritas desde hace mucho tiempo tanto de nuestros guías como de nuestros huéspedes'));
    cruceros.push(new crucero('Isla Paulet', 327880, 5, 'Isla Paulet.jpg','12 días', 'La isla de Paulet alberga una colonia de pingüinos de Adelia, con unas 100.000 parejas reproductoras, ha sido designada Área Importante para las Aves por BirdLife International. En la isla Paulet también anidan cormoranes imperiales, gaviotas de algas y petreles de las nieves, lo que la convierte en un apreciado lugar de aterrizaje para los fotógrafos de aves y los entusiastas de la fauna antártica en general.'));
    cruceros.push(new crucero('Isla Cerro Nevado', 436000, 6, 'Isla Cerro Nevado.jpg','12 días', 'Situada en el remoto Mar de Weddell de la Antártida, la Isla Cerro Nevado está casi completamente cubierta de nieve. Tiene una historia tan fascinante como su paisaje, aunque normalmente es la colonia de pingüinos emperador la que más visitantes atrae. En los últimos años, hemos tenido la suerte de ver la colonia de la Isla Cerro Nevado, pero estamos especialmente a merced del clima y del hielo en esta remota zona antártica.'));
    cruceros.push(new crucero('Georgias del Sur', 506520, 7, 'Georgias del Sur.jpg','12 días', 'Pocos lugares se pueden comparar con las Georgias del Sur en cuanto a fauna exótica y paisajes asombrosos. En este viaje de exploración podrá disfrutar de las colonias de albatros errantes y ver algunos de los mejores lugares de la Tierra para la cría de pingüinos rey y elefantes marinos, junto con increíbles paisajes polares día a día.'));
    cruceros.push(new crucero('Mar de Weddell', 546700, 8, 'Mar de Weddell.jpg','14 días', 'El Mar de Weddell está frecuentado por un gran número de orcas, ballenas jorobadas y Minkes, focas leopardo y focas cangrejeras. El área es también hogar de un gran número de pingüinos, como los Adelia,que tienen una colonia de unos 100.000 parejas reproductoras, los cuales anidan en la isla Paulet. Recientemente fue encontrada una colonia de pingüinos Emperador cerca de la Isla Cerro Nevado.'));
    cruceros.push(new crucero('Glaciar Vinciguerra', 523800, 9, 'Glaciar Vinciguerra.jpg','15 días', 'El glaciar Vinciguerra es uno de los más grandes de Tierra del Fuego. Caminar por su gélida superficie es para muchos un gran desafío y una experiencia realmente única. Si a esto le sumamos la posibilidad de llegar a una de las lagunas más hermosas de la provincia, la diversión está más que asegurada. Esta excursión tiene un nivel de exigencia quizá mayor a otras, pero resulta accesible para todo aquel que esté dispuesto a caminar algunas horas. ¿El premio? Conocer uno de los circuitos más atractivos que tienen los alrededores a la ciudad de Ushuaia.'));
    cruceros.push(new crucero('Canal Beagle', 414680, 10, 'Canal Beagle.jpg','11 días', 'Partiendo del puerto turístico local, navegaremos por la bahía de Ushuaia hacia el Canal Beagle, donde tendremos como primer destino el Faro Les Eclaireurs (Los Iluminadores, termino utilizado en Francia), un autentico símbolo fueguino.Luego nos dirigiremos al archipiélago Bridges y aproximandonos a la Isla de los Lobos podremos observar lobos marinos de uno y dos pelos. Continuando nuestro viaje hacia la Isla de los Pájaros, navegaremos alrededor de la misma y podremos apreciar la avifauna fueguina: Skúas, Albatros de Ceja Negra, Patos Vapor, Cauquenes, Gaviotas Cocineras, Gaviotas Grises, Cormoranes Imperiales y reales'));
}

let cart = [];

const cartStorage = localStorage.getItem('cart')
if (cartStorage) {
    cart = JSON.parse(cartStorage);
    for (const crucero of cart) {
        mostrarcart(crucero)
    }
    calcularTotal(cart);
}

const catalogoDecruceros = document.getElementById('catalogoDecruceros');
function renderizarcruceros(cruceros) {
    catalogoDecruceros.innerHTML = ``
    for (const crucero of cruceros) {
        const fila = document.createElement('div');
        fila.classList.add('px-2', 'max-w-sm', 'rounded', 'overflow-hidden', 'shadow-lg');
        fila.innerHTML =
            `
        <img class='p-1 w-full' src='./assets/img/${crucero.img1}' alt='${crucero.nombre}'>
        <div class='px-6 py-4''>
        <div style='text-align: center;' class='font-bold text-xl mb-2'>${crucero.nombre}</div>
        <p style='text-align: justify;' class='text-gray-700 text-base'>
        ${crucero.descripcion}
        </p>
        </div>
        <div class='px-6 pt-4 pb-2' style='text-align: center;'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Duración: ${crucero.duracion}</span>
        <span class='inline-block text-2xl font-semibold pb-2'>${crucero.precioARS} ARS</span><br>
        <button id='${crucero.id}' class='inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 botonCompra hover:bg-blue-300'>
        Reservar Crusero
        </button>
        </div>
        </div>
            `
        catalogoDecruceros.append(fila);
    }
    botonComprar();
}

function toastifycruceroAgregado() {
    Toastify({
        text: '✓ crucero agregado',
        duration: 500,
        gravity: 'bottom',
        position: 'center',
        style: {
            fontSize: '24px',
            color: 'white',
            background: '#3b82f6',
            opacity: '0.9'
        }
    }).showToast();
}

function botonComprar() {
    const btnCompra = document.querySelectorAll('.botonCompra');
    for (const boton of btnCompra) {
        boton.addEventListener('click', agregarcart);
    }
}

function agregarcart(e) {
    const id = e.target.getAttribute('id');
    const cruceroseleccionado = cruceros.find((crucero) => crucero.id === parseInt(id));
    const cruceroExistente = cart.find((crucero) => crucero.id === cruceroseleccionado.id);
    if (!cruceroExistente) {
        cruceroseleccionado.personas = 1;
        toastifycruceroAgregado();
        mostrarcart(cruceroseleccionado);
        cart.push(cruceroseleccionado);
    } else {
        cruceroExistente.personas++;
        const personas = document.getElementById(`personas-${cruceroseleccionado.id}`);
        if (personas) {
            personas.innerHTML = cruceroExistente.personas;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    calcularTotal(cart);
}

function mostrarcart(crucero) {
    const rate = document.getElementById('rateARS')
    rate.innerHTML =
        `
    <span>1 USD = ${rateARS.toFixed(2)} ARS</span>
        `

    const tabla = document.getElementById('tbody');

    const fila = document.createElement('tr');
    fila.id = `id-${crucero.id}`
    fila.classList.add('hover:bg-gray-200')

    const td1 = document.createElement('td');
    const img = document.createElement('img');
    img.src = `./assets/img/${crucero.img1}`
    img.classList.add('w-20', 'p-2')
    td1.appendChild(img);

    const td2 = document.createElement('td');
    const p = document.createElement('p');
    p.innerHTML = crucero.nombre
    td2.appendChild(p);
    td2.classList.add('text-left', 'w-25', 'p-1', 'text-base', 'tracking-wide')

    const td3 = document.createElement('td');
    td3.innerHTML = crucero.personas
    td3.id = `personas-${crucero.id}`
    td3.classList.add('text-center', 'w-20', 'p-3', 'text-base', 'tracking-wide')

    const td4 = document.createElement('td');
    td4.innerHTML = (crucero.precioARS).toFixed(2)
    td4.classList.add('text-right', 'w-20', 'p-3', 'text-base', 'tracking-wide')

    const td5 = document.createElement('td');
    const button = document.createElement('button');
    button.id = `borrar-${crucero.id}`
    button.innerHTML =
        `
    <svg class='w-5' id=${button.id} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
    </svg>
        `
    button.classList.add('bg-primary-color', 'hover:bg-blue-300', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded-full');
    button.addEventListener('click', borrarcrucero);
    td5.appendChild(button);

    fila.appendChild(td1);
    fila.appendChild(td2);
    fila.appendChild(td3);
    fila.appendChild(td4);
    fila.appendChild(td5);
    tabla.append(fila);

    totalcruceroscart();
}

function totalcruceroscart() {
    const tabla = document.getElementById('tbody');
    let totalRows = tabla.rows.length
    const totalcruceroscart = document.getElementById('totalcruceroscart');
    const btnBorrarTodo = document.getElementById('borrarTodoElcart');
    if (totalRows === 0) {

        totalcruceroscart.classList.add('hidden');
        btnBorrarTodo.classList.add('hidden');

    } else {

        totalcruceroscart.classList.remove('hidden');
        totalcruceroscart.innerText = totalRows
    }

    if (totalRows > 1) {
        btnBorrarTodo.classList.remove('hidden');
    }

}

function borrarcrucero(e) {
    const id = e.target.getAttribute('id')?.replace('borrar-', '');
    const fila = document.getElementById(`id-${id}`);
    if (fila) {
        cart = cart.filter((crucero) => crucero.id !== parseInt(id));
        fila.remove();
        localStorage.setItem('cart', JSON.stringify(cart));
        calcularTotal(cart);
        const cruceroseleccionado = cruceros.find((crucero) => crucero.id === parseInt(id));
        if (cruceroseleccionado) {
            cruceroseleccionado.personas = 0
            totalcruceroscart();
        }
    }
}

const moneda = document.getElementById('moneda');
moneda.addEventListener('change', () => {
    monedaValue = parseInt(moneda.value);
    monedaText = moneda.options[moneda.selectedIndex].text;
    calcularTotal(cart);
});

function calcularTotal(cart) {
    if (monedaValue == 1) {
        const cartTotal = document.getElementById('cartTotal');
        const totalcartARS = cart.reduce((previous, current) => previous + (current.personas * current.precioARS), 0);
        const iva = totalcartARS * 0.21
        const total = totalcartARS + iva
        cartTotal.innerHTML =
            `
        Subtotal: ${totalcartARS.toFixed(2)} ${monedaText} <br>
        IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
        Total: ${total.toFixed(2)} ${monedaText}
            `
    }
    if (monedaValue == 2) {
        const cartTotal = document.getElementById('cartTotal');
        const totalcartUSD = cart.reduce((previous, current) => previous + (current.personas * current.precioUSD), 0);
        const iva = totalcartUSD * 0.21
        const total = totalcartUSD + iva
        cartTotal.innerHTML =
            `
        Subtotal en ${monedaText}: ${totalcartUSD.toFixed(2)} ${monedaText} <br>
        IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
        Total: ${total.toFixed(2)} ${monedaText}
            `
    }
}

const btnPagar = document.getElementById('botonPagar');
btnPagar.addEventListener('click', () => {
    let total = document.getElementById('cartTotal').innerText;
    //Si el cart está en blanco, o el total es igual a 0 no hace nada
    if (total == '' || (total.indexOf('Total: 0.00 ARS') != -1) || (total.indexOf('Total: 0.00 USD') != -1)) {
        return
    }
    const urlMercadoPago = 'https://www.mercadopago.com/';
    window.open(urlMercadoPago, '_blank');
    localStorage.clear();
});

const btnBorrarTodoElcart = document.getElementById('borrarTodoElcart');
btnBorrarTodoElcart.addEventListener('click', swalBorrarTodoElcart);
function borrarTodosLoscruceros() {
    const tabla = document.getElementById('tbody');
    tabla.innerHTML = ''
    cart = [];
    totalcruceroscart();
    calcularTotal(cart);
    localStorage.clear();
    cruceros = [];
    crucerosPush();
}

async function swalBorrarTodoElcart() {
    const resultado = await Swal.fire({
        text: 'Seguro que quiere borrar todas las reservas?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#087325',
        confirmButtonText: `Sí`,
        denyButtonText: `No`,
        showClass: {
            popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut'
        },
        color: 'black',
        background: 'white',
    });
    if (resultado.isConfirmed) {
        borrarTodosLoscruceros();
    }
}


// Función que simula una llamada asíncrona a un servidor para obtener datos de cruceros, ya uqe no encontre ninguna api de cruceros y queria dejarla funcional a la api de exchange
function obtenerDatosDeCruceros() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const datos = [];
        if (datos) {
        resolve(datos);
        } else {
        reject("Error al obtener los datos de cruceros");
        }
    }, 2000);
    });
}

obtenerDatosDeCruceros()
    .then((datos) => {
    console.log("Datos de cruceros:", datos);
    })
    .catch((error) => {
    console.error("Error al obtener los datos de cruceros:", error);
    });


crucerosPush();
cruceros = cruceros.sort((a, b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
renderizarcruceros(cruceros);
totalcruceroscart();

