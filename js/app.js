const productos = [
    {
      titulo: "Zapatillas Puma 180",
      categoria: "calzado",
      imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/389267/17/sv01/fnd/ARG",
      marca: "puma",
      precio: 179.999,
      stock: 13,
      genero: "male",
      id: 1
    },
    {
      titulo: "Zapatillas Puma 180",
      categoria: "calzado",
      imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/389267/10/sv01/fnd/ARG",
      marca: "puma",
      precio: 179.999,
      stock: 9,
      genero: "female",
      id: 2
    },
    {
      titulo: "Zapatillas Puma 180",
      categoria: "calzado",
      imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/389267/11/sv01/fnd/ARG",
      marca: "puma",
      precio: 179.999,
      stock: 13,
      genero: "male",
      id: 3
    },
    {
      titulo: "Zapatillas Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf6897b1d/products/PU397370-01/PU397370-01-1.JPG",
      marca: "puma",
      precio: 169.999,
      stock: 7,
      genero: "male",
      id: 4
    },
    {
      titulo: "Zapatillas Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9270ba9f/products/PU397370-13/PU397370-13-1.JPG",
      marca: "puma",
      precio: 169.999,
      stock: 4,
      genero: "male",
      id: 5
    },
    {
      titulo: "Zapatillas Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3d5d305b/products/PU397370-12/PU397370-12-1.JPG",
      marca: "puma",
      precio: 169.999,
      stock: 12,
      genero: "male",
      id: 6
      },
    {
      titulo: "Zapatillas Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0c65d2b5/products/PU397370-03/PU397370-03-1.JPG",
      marca: "puma",
      precio: 169.999,
      stock: 5,
      genero: "male",
      id: 7
      },
    {
      titulo: "Zapatillas Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc62cf14e/products/PU397370-11/PU397370-11-1.JPG",
      marca: "puma",
      precio: 169.999,
      stock: 9,
      genero: "female",
      id: 8
    },
    {
      titulo: "Zapatillas infantiles Suede XL",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd1422247/products/PU396578-01/PU396578-01-1.JPG",
      marca: "puma",
      precio: 84.999,
      stock: 8,
      genero: "kid",
      id: 9
    },
    {
      titulo: "Zapatillas Dunk Low Retro",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw27eecd21/products/NIDD1391-601/NIDD1391-601-1.JPG",
      marca: "nike",
      precio: 209.999,
      stock: 10,
      genero: "male",
      id: 10
    },
    {
      titulo: "Zapatillas Dunk Low SE",
      categoria: "calzado",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1456283-800-auto?v=638503622920130000&width=800&height=auto&aspect=true",
      marca: "nike",
      precio: 209.999,
      stock: 8,
      genero: "female",
      id: 11
    },
    {
      titulo: "Zapatillas Dunk Low Retro",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf3e053ad/products/NIDZ2536-600/NIDZ2536-600-1.JPG",
      marca: "nike",
      precio: 239.999,
      stock: 6,
      genero: "male",
      id: 12
    },
    {
      titulo: "Zapatillas Dunk Low",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6291a41a/products/NIDD1503-123/NIDD1503-123-1.JPG",
      marca: "nike",
      precio: 209.999,
      stock: 7,
      genero: "female",
      id: 13
    },
    {
      titulo: "Zapatillas Dunk Low Retro",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbc967464/products/NIDD1391-400/NIDD1391-400-1.JPG",
      marca: "nike",
      precio: 209.999,
      stock: 6,
      genero: "male",
      id: 14
    },
    {
      titulo: "Zapatillas Air Jordan 1 Low SE",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f7c742d/products/NIDZ4130-201/NIDZ4130-201-1.JPG",
      marca: "nike",
      precio: 229.999,
      stock: 8,
      genero: "male",
      id: 15
    },
    {
      titulo: "Zapatillas Air Jordan 1 Low",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2b5fa3b5/products/NIDC0774-170/NIDC0774-170-1.JPG",
      marca: "nike",
      precio: 209.999,
      stock: 6,
      genero: "female",
      id: 16
    },
    {
      titulo: "Zapatillas Air Jordan 1 Low SE",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw066b0a4f/products/NIFB2216-200/NIFB2216-200-1.JPG",
      marca: "nike",
      precio: 199.999,
      stock: 6,
      genero: "kid",
      id: 17
    },
    {
      titulo: "Zapatillas Campus 00s",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw24041e36/products/ADIH7504/ADIH7504-1.JPG",
      marca: "adidas",
      precio: 171.999,
      stock: 9,
      genero: "male",
      id: 18
    },
    {
      titulo: "Zapatillas Campus 00s",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfb9729a7/products/ADIF8770/ADIF8770-1.JPG",
      marca: "adidas",
      precio: 171.999,
      stock: 5,
      genero: "male",
      id: 19
    },
    {
      titulo: "Zapatillas Campus 00s",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw432fd323/products/ADIF4335/ADIF4335-1.JPG",
      marca: "adidas",
      precio: 171.999,
      stock: 3,
      genero: "female",
      id: 20
    },
    {
      titulo: "Zapatillas Samba OG",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1337f74a/products/ADB75806/ADB75806-1.JPG",
      marca: "adidas",
      precio: 189.999,
      stock: 3,
      genero: "male",
      id: 21
    },
    {
      titulo: "Zapatillas Handball Spezial",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf3fdfbe5/products/ADIF6561/ADIF6561-1.JPG",
      marca: "adidas",
      precio: 183.999,
      stock: 2,
      genero: "female",
      id: 22
    },
    {
      titulo: "Zapatillas Campus 00s",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4e867445/products/ADHQ8710/ADHQ8710-1.JPG",
      marca: "adidas",
      precio: 171.999,
      stock: 9,
      genero: "male",
      id: 23
    },
    {
      titulo: "Zapatillas Campus 00s",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdcd20d02/products/ADHQ4409/ADHQ4409-1.JPG",
      marca: "adidas",
      precio: 171.999,
      stock: 2,
      genero: "female",
      id: 24
    },
    {
      titulo: "Zapatillas Adi2000",
      categoria: "calzado",
      imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8c854e9a/products/ADIF8821/ADIF8821-1.JPG",
      marca: "adidas",
      precio: 189.999,
      stock: 3,
      genero: "male",
      id: 25
    },
    {
      titulo: "Camiseta San Lorenzo 2024",
      categoria: "indumentaria",
      imagen: "https://nikearprod.vtexassets.com/arquivos/ids/888706-800-800?width=800&height=800&aspect=true",
      marca: "nike",
      precio: 74.999,
      stock: 7,
      genero: "male",
      id: 26
    },
    {
      titulo: "Camiseta San Lorenzo 2024 niño",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8be68b7b/products/NIDR2702-414/NIDR2702-414-1.JPG",
      marca: "nike",
      precio: 59.999,
      stock: 9,
      genero: "kid",
      id: 27
    },
    {
      titulo: "Camiseta San Lorenzo 2024 mujer",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa606c3ad/products/NIDR2700-414/NIDR2700-414-1.JPG",
      marca: "nike",
      precio: 69.999,
      stock: 7,
      genero: "female",
      id: 28
    },
    {
      titulo: "Camiseta San Lorenzo suplente 2024",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwebc2f76e/products/NIDH8440-103/NIDH8440-103-1.JPG",
      marca: "nike",
      precio: 74.999,
      stock: 5,
      genero: "male",
      id: 29
    },
    {
      titulo: "Camiseta Argentina 2024",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb3ec28b9/products/ADIP8400/ADIP8400-1.JPG",
      marca: "adidas",
      precio: 79.999,
      stock: 6,
      genero: "male",
      id: 30
    },
    {
      titulo: "Camiseta Argentina Messi 2024",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc9357934/products/ADIX7791/ADIX7791-1.JPG",
      marca: "adidas",
      precio: 89.999,
      stock: 2,
      genero: "male",
      id: 31
    },
    {
      titulo: "Camiseta Argentina 2024 niño",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7a086929/products/ADIP8392/ADIP8392-1.JPG",
      marca: "adidas",
      precio: 64.999,
      stock: 6,
      genero: "kid",
      id: 32
    },
    {
      titulo: "Camiseta Argentina 2024 mujer",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3ea8869d/products/ADIP8390/ADIP8390-1.JPG",
      marca: "adidas",
      precio: 69.999,
      stock: 5,
      genero: "female",
      id: 33
    },
    {
      titulo: "Camiseta Argentina suplente 2024",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb70a02d2/products/ADIP8403/ADIP8403-1.JPG",
      marca: "adidas",
      precio: 79.999,
      stock: 9,
      genero: "male",
      id: 34
    },
    {
      titulo: "Camiseta Boca 23/24",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf021263f/products/ADIV1922/ADIV1922-1.JPG",
      marca: "adidas",
      precio: 79.999,
      stock: 10,
      genero: "male",
      id: 35
    },
    {
      titulo: "Camiseta Boca 23/24 mujer",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw56edb857/products/ADIV1925/ADIV1925-1.JPG",
      marca: "adidas",
      precio: 69.999,
      stock: 3,
      genero: "female",
      id: 36
    },
    {
      titulo: "Camiseta Boca 23/24 niño",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbbc2a6f2/products/ADIV1926/ADIV1926-1.JPG",
      marca: "adidas",
      precio: 64.999,
      stock: 5,
      genero: "kid",
      id: 37
    },
    {
      titulo: "Camiseta River alternativa 24/25",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa38adfd7/products/ADIP6119/ADIP6119-1.JPG",
      marca: "adidas",
      precio: 79.999,
      stock: 8,
      genero: "male",
      id: 38
    },
    {
      titulo: "Camiseta River 23/24 niño",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw16922876/products/ADHY3213/ADHY3213-1.JPG",
      marca: "adidas",
      precio: 64.999,
      stock: 5,
      genero: "kid",
      id: 39
    },
    {
      titulo: "Camiseta River alternativa 24/25 niño",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw33efcaf9/products/ADIP6115/ADIP6115-1.JPG",
      marca: "adidas",
      precio: 64.999,
      stock: 9,
      genero: "kid",
      id: 40
    },
    {
      titulo: "Camiseta Independiente 24/25",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1453916-1600-auto?v=638503309110730000&width=1600&height=auto&aspect=true",
      marca: "puma",
      precio: 79.999,
      stock: 7,
      genero: "male",
      id: 41
    },
    {
      titulo: "Camiseta San Lorenzo suplente 2024 mujer",
      categoria: "indumentaria",
      imagen: "https://nikearprod.vtexassets.com/arquivos/ids/889563-800-800?width=800&height=800&aspect=true",
      marca: "nike",
      precio: 69.999,
      stock: 8,
      genero: "female",
      id: 42
    },
    {
      titulo: "Camiseta Boca suplente 23/24",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1235167-800-auto?v=638393651928130000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 79.999,
      stock: 7,
      genero: "male",
      id: 43
    },
    {
      titulo: "Camiseta Boca alternativa 24/25",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1309128-800-auto?v=638479120847770000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 79.999,
      stock: 9,
      genero: "male",
      id: 44
    },
    {
      titulo: "Camiseta Boca alternativa 24/25 mujer",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1309106-800-auto?v=638479120462400000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 79.999,
      stock: 7,
      genero: "female",
      id: 45
    },
    {
      titulo: "Camiseta Boca alternativa 24/25 niño",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1309118-800-auto?v=638479120659170000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 64.999,
      stock: 6,
      genero: "kid",
      id: 46
    },
    {
      titulo: "Camiseta River 23/24",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1003506-800-auto?v=638365582789900000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 79.999,
      stock: 9,
      genero: "male",
      id: 47
    },
    {
      titulo: "Camiseta River suplente 23/24",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1017784-800-auto?v=638315846124670000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 79.999,
      stock: 3,
      genero: "male",
      id: 48
    },
    {
      titulo: "Camiseta River suplente 23/24 mujer",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1017774-800-auto?v=638315846008800000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 69.999,
      stock: 4,
      genero: "female",
      id: 49
    },
    {
      titulo: "Camiseta River suplente 23/24 niño",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1017759-800-auto?v=638315845858700000&width=800&height=auto&aspect=true",
      marca: "adidas",
      precio: 64.999,
      stock: 4,
      genero: "kid",
      id: 50
    },
    {
      titulo: "Camiseta Independiente 24/25",
      categoria: "indumentaria",
      imagen: "https://essential.vtexassets.com/arquivos/ids/1459304-800-auto?v=638526932017770000&width=800&height=auto&aspect=true",
      marca: "puma",
      precio: 79.999,
      stock: 7,
      genero: "male",
      id: 51
    },
    {
      titulo: "Camiseta Liverpool 23/24",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd19a231a/products/NIDX2692-688/NIDX2692-688-1.JPG",
      marca: "nike",
      precio: 74.999,
      stock: 10,
      genero: "male",
      id: 52
    },
    {
      titulo: "Camiseta Barcelona 23/24",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw699ae707/products/NIDX2687-456/NIDX2687-456-1.JPG",
      marca: "nike",
      precio: 74.999,
      stock: 7,
      genero: "male",
      id: 53
    },
    {
      titulo: "Camiseta PSG 23/24",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw33ab99b5/products/NIDX2693-101/NIDX2693-101-1.JPG",
      marca: "nike",
      precio: 74.999,
      stock: 5,
      genero: "male",
      id: 54
    },
    {
      titulo: "Camiseta Real Madrid 24/25",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw722ff6ef/products/ADIJ5901/ADIJ5901-1.JPG",
      marca: "adidas",
      precio: 79.999,
      stock: 5,
      genero: "male",
      id: 55
    },
    {
      titulo: "Camiseta Inter Miami 24/25",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw39239970/products/ADJE9741/ADJE9741-1.JPG",
      marca: "adidas",
      precio: 89.999,
      stock: 2,
      genero: "male",
      id: 56
    },
    {
      titulo: "Camiseta Inter Miami 24/25",
      categoria: "indumentaria",
      imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa154e74f/products/ADJE9744/ADJE9744-1.JPG",
      marca: "adidas",
      precio: 89.999,
      stock: 3,
      genero: "male",
      id: 57
    }
  ]

let carrito
const carritoStorage = localStorage.getItem('carrito')
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage)
} else {
  carrito = []
}
contenidoAgregado()

// AGREGAR TODOS LOS PRODUCTOS A LA PANTALLA PRINCIPAL

    const contenedorProductos = document.querySelector('#contenedor-productos')
    const agregarProducto = document.getElementsByClassName('agregar-producto')

  async function inicializarCatalogo() {
    try {
      const peticion = await fetch('https://666aa4c37013419182d03b0a.mockapi.io/ecommerce/productos')
      if (peticion.status !== 200 || !peticion.ok) {
        throw new Error('Algo no salio de la manera esperada')
      }
      const productos = await peticion.json()
      productos.forEach((item) => {
        contenedorProductos.innerHTML += `
         <div class='card'>
             <img src='${item.imagen}' alt='${item.titulo}'>
             <h2>${item.titulo}</h2>
             <span>$${item.precio}</span>
             <div class='card-btn'>
                 <div><i class='ti ti-info-circle detalle-producto' data-id='${item.id}'></i></div>
                 <div><i class='ti ti-shopping-bag-plus agregar-producto' data-id='${item.id}'></i></div>
             </div>
         </div>`
      })
    for (const i of agregarProducto) {
        const productId = i.getAttribute('data-id')
        i.addEventListener('click', function () {
            obtenerProducto(productId)
        })
    }
    } catch (error) {
      console.error('Error al obtener el catalogo de productos', error)
    }
  }
  
  inicializarCatalogo()
    
// ABRIR Y CERRAR CARRITO

 const abrirCarrito = document.querySelector('.carrito')
 const miCarrito = document.querySelector('.mi-carrito')
 const cerrarCarrito = document.querySelector('.cerrar-carrito')

 abrirCarrito.addEventListener('click', () => {
    miCarrito.classList.add('active')
 })
 cerrarCarrito.addEventListener('click', () => {
    miCarrito.classList.remove('active')
 })

//////////////////      AGREGAR PRODUCTOS AL CARRITO    ///////////////

function obtenerProducto(id) {
    const itemObtenido = productos.find((item) => item.id === parseInt(id))
    const itemCarrito = carrito.find((item) => item.id === parseInt(id))
    if (itemCarrito) {
      itemCarrito.quantity += 1
    } else {
      const otroItem = {
        quantity: 1,
        ...itemObtenido
      }
      carrito.push(otroItem)
    }
    actualizarTotal()
    guardar()
    contenidoAgregado()
    Swal.fire({
        icon: 'success',
        text: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 2000
    })
}

function quitarProducto (prod) {
    const quitarProducto = carrito.filter((item) => item.id !== prod.id)
    carrito = [...quitarProducto]
    actualizarTotal()
    guardar()
    contenidoAgregado()
    Swal.fire({
        icon: 'error',
        text: 'Producto eliminado del carrito',
        showConfirmButton: false,
        timer: 2000
    })
}

function guardar() {
    const carritoStorage = JSON.stringify(carrito)
    localStorage.setItem('carrito', carritoStorage)
  }

function contenidoAgregado () {
    const contenidoCarrito = document.querySelector('.contenido-carrito')
    const numeroCarrito = document.querySelector('.numero-carrito')
    let totalCantidad = 0
    
    contenidoCarrito.innerHTML = ''
    
    carrito.forEach((product) => {
    
    totalCantidad = totalCantidad + product.quantity
    numeroCarrito.classList.remove('sleep')
    numeroCarrito.innerHTML = totalCantidad

      const divContenedor = document.createElement('div')
      divContenedor.classList.add('producto-carrito')

      const imagenProducto = document.createElement('img')
      imagenProducto.src = product.imagen
      imagenProducto.alt = product.titulo

      const divInfo = document.createElement('div')
      divInfo.classList.add('producto-info-carrito')
  
      const tituloProducto = document.createElement('h3')
      tituloProducto.innerText = product.titulo
  
      const precioProducto = document.createElement('span')
      precioProducto.innerText = '$' + product.precio * product.quantity

      const numProducto = document.createElement('span')
      numProducto.innerHTML = product.quantity
      
      const btnTrash = document.createElement('i')
      btnTrash.classList.add('ti')
      btnTrash.classList.add('ti-trash')
      btnTrash.classList.add('borrar-producto')
      btnTrash.addEventListener('click', function () {
        quitarProducto(product)
      })
        
      divInfo.append(tituloProducto, precioProducto, numProducto, btnTrash)
      divContenedor.append(imagenProducto, divInfo)
      contenidoCarrito.append(divContenedor)
    })
    actualizarContador()
  }
  
  const total = document.querySelector('.total')
    total.innerHTML += `
    <div>
        <div class="titulo-total">total</div>
        <div class="precio-total">$0</div>
    </div>
    <button class="btn-comprar" type="button" >Finalizar compra</button>`
  
 function actualizarTotal() {
    const precioTotal = document.querySelector('.precio-total')
    const totalCalculado = carrito.reduce((acc, product) => acc + (product.precio * product.quantity), 0)
    precioTotal.innerText = `$${totalCalculado}`
}       

function actualizarContador() {
    const total = document.querySelector('.total')
    const numeroCarrito = document.querySelector('.numero-carrito')
    const noNumeroCarrito = document.querySelector('.no-numero-carrito')
    const contenidoCarrito = document.querySelector('.contenido-carrito')
    const nuevoNumero = carrito.reduce((acc, producto) => acc + producto.quantity, 0)
    if (nuevoNumero > 0) {
        noNumeroCarrito.style.display = 'flex'
        numeroCarrito.innerText = nuevoNumero
        total.style.display = 'flex'
    }else {
        noNumeroCarrito.style.display = 'none'
        contenidoCarrito.innerHTML = `<p class="nada-en-carrito">No tienes ningún artículo en tu carrito de compras.
        <i class="ti ti-shopping-cart"></i></p>`
        total.style.display = 'none'
    }
}

function finalizarCompra() {
  const total = document.querySelector('.total')
  const btnComprar = document.querySelector('.btn-comprar')
  const contenidoCarrito = document.querySelector('.contenido-carrito')
  const precioTotal = document.querySelector('.precio-total')
  const noNumeroCarrito = document.querySelector('.no-numero-carrito')
    btnComprar.addEventListener('click', () => {
      noNumeroCarrito.style.display = 'none'
      contenidoCarrito.innerHTML = `<p class="nada-en-carrito">No tienes ningún artículo en tu carrito de compras.
          <i class="ti ti-shopping-cart"></i></p>`
      total.style.display = 'none'
      carrito = []
      guardar()
      Swal.fire({
        icon: 'success',
        text: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 2000
      })
    })
}

finalizarCompra()


//////////////////////////////                 FILTRADO DE PRODUCTOS (POR MARCA, CATEGORIA Y GENERO)    /////////////////////////

 const filtrador = document.querySelector('#filtrador')
 filtrador.addEventListener('change', (event) => {
    const filtroMarca = event.target.value
    const filtroCategoria = event.target.value
    const filtroGenero = event.target.value

    if (filtroMarca === '') {
        contenedorProductos.innerHTML = ''
        productos.forEach((item) => {
            contenedorProductos.innerHTML += `
             <div class='card'>
                 <img src='${item.imagen}' alt='${item.titulo}'>
                 <h2>${item.titulo}</h2>
                 <span>${item.precio}</span>
                 <div class="card-btn">
                     <div><i class='ti ti-info-circle detalle-producto' data-id='${item.id}'></i></div>
                     <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${item.id}'></i></div>
                 </div>
             </div>`
          })
          for (const i of agregarProducto) {
            const productId = i.getAttribute('data-id')
            i.addEventListener('click', function () {
                obtenerProducto(productId)
            })
        }
     return
    }
    else if (filtroCategoria === '') {
        contenedorProductos.innerHTML = ''
        productos.forEach((item) => {
            contenedorProductos.innerHTML += `
             <div class='card'>
                 <img src='${item.imagen}' alt='${item.titulo}'>
                 <h2>${item.titulo}</h2>
                 <span>${item.precio}</span>
                 <div class="card-btn">
                     <div><i class='ti ti-info-circle detalle-producto' data-id='${item.id}'></i></div>
                     <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${item.id}'></i></div>
                 </div>
             </div>`
          })
     return
    }
    else if (filtroGenero === '') {
        contenedorProductos.innerHTML = ''
        productos.forEach((item) => {
            contenedorProductos.innerHTML += `
             <div class='card'>
                 <img src='${item.imagen}' alt='${item.titulo}'>
                 <h2>${item.titulo}</h2>
                 <span>${item.precio}</span>
                 <div class="card-btn">
                     <div><i class='ti ti-info-circle detalle-producto' data-id='${item.id}'></i></div>
                     <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${item.id}'></i></div>
                 </div>
             </div>`
          });
     return
    }
    

    const filtrarMarca = productos.filter((item) => {
        return item.marca === filtroMarca
    })
    const filtrarCategoria = productos.filter((item) => {
        return item.categoria === filtroCategoria
    })
    const filtrarGenero = productos.filter((item) => {
        return item.genero === filtroGenero
    })

    contenedorProductos.innerHTML = ''

    filtrarMarca.forEach((producto) => {
    contenedorProductos.innerHTML += `
     <div class='card'>
         <img src='${producto.imagen}' alt='${producto.titulo}'>
         <h2>${producto.titulo}</h2>
         <span>${producto.precio}</span>
         <div class="card-btn">
             <div><i class='ti ti-info-circle detalle-producto' data-id='${producto.id}'></i></div>
             <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${producto.id}'></i></div>
         </div>
     </div>`
    })

    filtrarCategoria.forEach((producto) => {
        contenedorProductos.innerHTML += `
         <div class='card'>
             <img src='${producto.imagen}' alt='${producto.titulo}'>
             <h2>${producto.titulo}</h2>
             <span>${producto.precio}</span>
             <div class="card-btn">
                 <div><i class='ti ti-info-circle detalle-producto' data-id='${producto.id}'></i></div>
                 <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${producto.id}'></i></div>
             </div>
         </div>`
        })

        filtrarGenero.forEach((producto) => {
            contenedorProductos.innerHTML += `
             <div class='card'>
                 <img src='${producto.imagen}' alt='${producto.titulo}'>
                 <h2>${producto.titulo}</h2>
                 <span>${producto.precio}</span>
                 <div class="card-btn">
                     <div><i class='ti ti-info-circle detalle-producto' data-id='${producto.id}'></i></div>
                     <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${producto.id}'></i></div>
                 </div>
             </div>`
        })
        for (const i of agregarProducto) {
          const productId = i.getAttribute('data-id')
          i.addEventListener('click', function () {
              obtenerProducto(productId)
          })
      }
 })
 
 /////////////////////////// BUSCAR EN LA LUPA  ////////////////////////

 const lupa = document.querySelector('.lupa')
 const buscar = document.querySelector('.buscar')

 lupa.addEventListener('click', function (event) {
   const valorBuscar = buscar.value
   const filtroLupa = productos.filter((item) => {
       return item.titulo.toLocaleLowerCase().includes(valorBuscar.toLocaleLowerCase())
   })
   contenedorProductos.innerHTML = ''

   filtroLupa.forEach((producto) => {
   contenedorProductos.innerHTML += `
    <div class='card'>
        <img src='${producto.imagen}' alt='${producto.titulo}'>
        <h2>${producto.titulo}</h2>
        <span>${producto.precio}</span>
        <div class="card-btn">
            <div><i class='ti ti-info-circle detalle-producto' data-id='${producto.id}'></i></div>
            <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${producto.id}'></i></div>
        </div>
    </div>`
   })
   for (const i of agregarProducto) {
    const productId = i.getAttribute('data-id')
    i.addEventListener('click', function () {
        obtenerProducto(productId)
    })
}
   
 })

 const addX = document.querySelector('.x-lupa')

 buscar.addEventListener('keypress', (event) => {
    console.log(event.key)
    if (event.key = true) {
        addX.classList.remove('sleep')
    }
    const xBorrado = document.querySelector('#x-borrado')
    addX.addEventListener('click', (e) => {
        addX.classList.add('sleep')
        let child = xBorrado.firstChild
        while (child) {
            xBorrado.removeChild(child)
            child = xBorrado.firstChild
          }
          buscar.value = "";

          const valorBuscar = buscar.value
   const filtroBuscar = productos.filter((item) => {
       return item.titulo.toLocaleLowerCase().includes(valorBuscar.toLocaleLowerCase())
   })
   contenedorProductos.innerHTML = ''

   filtroBuscar.forEach((producto) => {
   contenedorProductos.innerHTML += `
    <div class='card'>
        <img src='${producto.imagen}' alt='${producto.titulo}'>
        <h2>${producto.titulo}</h2>
        <span>${producto.precio}</span>
        <div class="card-btn">
            <div><i class='ti ti-info-circle detalle-producto' data-id='${producto.id}'></i></div>
            <div><i class="ti ti-shopping-bag-plus agregar-producto" data-id='${producto.id}'></i></div>
        </div>
    </div>`  
   })
   for (const i of agregarProducto) {
    const productId = i.getAttribute('data-id')
    i.addEventListener('click', function () {
        obtenerProducto(productId)
    })
}
     })
     
 })
