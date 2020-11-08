// que es la i // i es el numero que lleva la cuenta, SIEMPRE es un numero, es la posicion del elemento.
//gralmente empieza con valor 0 y desp va cambiando


let i = 0 
console.log(i)
i = 1 
console.log(i)
i = 2 
console.log(i)
i = 3 
console.log(i)
i = 4 
// esto equivale al for de abajo:

for (let i = 0; i < 4; i++) { 
  console.log(i)
} 

const nombres = ["Ana", "Maca", "Angie", "Caro", "Pepo"]
//                    0         1         2         3       4

for (let i = 0; i < nombres.length; i++) {
  // el for solo le va cambiando el valor a i
  // el for es un BLDO q solo cuenta desde lo q le digamos (ej let i = 0) hasta lo q le digamos (nombres.length)
} 

// nombres[0] es igual a decir nombres[i] cuando i vale 0



nombres[0] // Ana
nombres[1] // Maca
nombres[2] // Angie
nombres[3] // Caro 


for (let i = 0; i < array.length; i++) {
  console.log(i)
  console.log(nombres[i])
}




// RETURN y FOR

const sumar = (num1, num2) => {
    const array = []
    array.push(num1)
    array.push(num2)

    if (num1 > 5) {
        return 5
    }
    else {
        return num1 + num2
    }
}

const contarHasta10 = () => {

  console.log("estoy antes del for")

  

  for (let i = 0; i < 10; i++) {
    console.log("adentro del for")
    console.log(i)
    console.log("adentro del for")
    // el for sigue y sigue a menos que le pongas un return
    if ( i === 100 ) {
      return "ESTO ES EL RETORNO" 
    }
  }


  console.log("estoy despues del for")
  return "NUNCA SE RETORNO NADA ADENTRO DEL FOR POR LO TANTO ESTO SI SE PUEDE RETORNAR"
  
}

console.log(contarHasta10())




// EJERCICIOS

const numeros = [5, 7, 2, 7, 9, 2, 99, 6, 4, 2, 6, 8, 90]
const masNumeros = [4, 7, 6, 3, 9]

const hayAlgunNumeroMayorA10 = (array) => {

  
  for (let i = 0; i < array.length; i++) {
      console.log("estoy en la vuelta", i)
      if (array[i] > 10) {
          return true
      } 

      // no ponemos un else return false aca, porque si no se corta antes de llegar a los otros numeros mayores a 10
  }

  console.log("LLEGAMOS AL FINAL DEL FOR")
  console.log(`SI LLEGAMOS AL FINAL DEL FOR ES PORQUE NUNCA 
  HUBO UN NUMERO MAYOR A DIEZ EN EL ARRAY`)
  return false 

}

// si hay un return en el for, se va a cortar la funcion y junto con ella el for, a menos de que haya una condicion adentro del for y esa condicion no se cumpla, en ese caso, llegamos al final de la funcion

console.log(hayAlgunNumeroMayorA10(numeros)) // true
console.log(hayAlgunNumeroMayorA10(masNumeros)) // false




// Crear una función obtenerNumeroMayor que tome como argumento un array de números y devuelva el mayor número de dicho array.

const obtenerNumeroMayor = (array) => {
    let numeroMasGrande = 0
    for (let i=0; i < array.length; i++) {
        if (array[i] > numeroMasGrande) {
            numeroMasGrande = array[i]
        }
    }
    return numeroMasGrande
}

console.log(obtenerNumeroMayor([2, 7, 12, 1]))

