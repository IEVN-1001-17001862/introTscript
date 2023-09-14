

import {calcularIVA2, IProducto } from "./05-desestructurar-funciones";

const carrito: IProducto []=[ {
    desc:'Telefono1',
    precio:800
},
{
    desc:'Telefono2',
    precio:400
},
{
    desc:'Telefono3',
    precio:795
},

]  
const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
