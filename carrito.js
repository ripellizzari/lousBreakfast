let carritoDeCompras = []

const contenedorProducto = document.getElementById('contenedor-galeria')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('btn-carrito')
const precioTotal = document.getElementById('precioTotal')




// Estructura de display de productos

mostrarProductos(stockProductos)
console.log(stockProductos)

function mostrarProductos(array) {
    array.forEach((x) => {
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += ` 
        
        <h3>${x.nombre}</h3>
        <p>Precio: ${x.precio}</p>
        <img src=${x.img} alt="" class="galeria__img">
        <button id=${x.id} class="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
        `


        contenedorProducto.appendChild(div)

        let boton = document.getElementById(`${x.id}`)
        boton.addEventListener('click', () => { agregarAlCarrito(`${x.id}`) })
    });
}




function agregarAlCarrito(id) {
    // let validar = carritoDeCompras.some(x => x.id == id)
    // if (validar) {
    //     contadorCarrito.innerText = carritoDeCompras.length++
    // }
    // else {
    let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
    console.log(productoAgregar)
    carritoDeCompras.push(productoAgregar)
    actualizarCarrito()

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `<hr>
        <p>${productoAgregar.nombre}</p>
        <p>Precio: ${productoAgregar.precio}</p>
        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        <hr>`
    contenedorCarrito.appendChild(div)
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    botonEliminar.addEventListener('click', () => {
        botonEliminar.parentElement.remove()
        console.log(botonEliminar.parentElement)
        carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
        console.log(carritoDeCompras)
        actualizarCarrito()
    })
}




// function agregarAlCarrito(id) {
//     let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
//     console.log(productoAgregar)
//     carritoDeCompras.push(productoAgregar)
//     // actualizarCarrito()

//     let div = document.createElement('div')
//     div.classList.add('productoEnCarrito')
//     div.innerHTML += `
//     <p>${productoAgregar.nombre}</p>
//     <p>Precio: ${productoAgregar.precio}</p>
//     <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//     `

//     contenedorCarrito.appendChild(div)
//     let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)


//     botonEliminar.addEventListener('click', () => {
//         botonEliminar.parentElement.remove()
//         console.log(botonEliminar.parentElement)
//         carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
//         console.log(carritoDeCompras)
//         actualizarCarrito()
//     })
// }







function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    //localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
    precioTotal.innerHTML = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

}


// function revisarLocal() {
//     let carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
//     if (carritoLocal) {
//         carritoLocal.forEach((el) => agregarAlCarrito(el.id))
//     }
// }

//revisarLocal()




