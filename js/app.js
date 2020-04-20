/*
Pseudo codigo
1. Declaración de variables.
2. Simular carro.
3. Crear Nuevo carro.
4. Guardar en la lista de carros.
*/

// VARIABLES

let brands = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi', 'Lotus', 'Ferrari', 'Alfa Romeo', 'Porche']

let colors = ['Rojo', 'Rosado', 'Naranja', 'Morado', 'Verde', 'Plateado', 'Negro', 'Blanco']

let engineSizes = [ 1400, 1500, 3200, 4500, 2300, 2000]

let carList = new Array 

// Simular carro

function randomNumber(arryaLength) {
  let randomNumber = Math.floor(Math.random() * arryaLength)
  return randomNumber
}

// Crea nuevo carro

function Car() {
  this.brand = brands[ randomNumber(brands.length) ]
  this.color = colors[ randomNumber(colors.length) ]
  this.engineSize = engineSizes[ randomNumber(engineSizes.length) ]
}

// Genera la lista de carros 

function generateCarList() {
  for(let i = 0; i < 30; i++) {
    carList[i] = new Car()
  }
  console.log(carList)
}

