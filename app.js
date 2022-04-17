//Diferencias entre declarativas y anónimas

function calcularDescuento(precio, descuento){
    //cual es el precio con descuento
 let descuentoCalculado = 100 - descuento; 
 let montoConDescuento = (precio * descuento) / 100; 

 return `El importe a abonar es de ${montoConDescuento}`

}

console.log(calcularDescuento(2500, 15));