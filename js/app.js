// VARIABLES

let brands = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi', 'Lotus', 'Ferrari', 'Alfa Romeo', 'Porche']

let colors = ['Rojo', 'Rosado', 'Naranja', 'Morado', 'Verde', 'Plateado', 'Negro', 'Blanco']

let engineSizes = [ 1400, 1500, 3200, 4500, 2300, 2000]

/*
Pseudo codigo
1. Simular carro.
2. Crear Nuevo carro.
3. Guardar en la lista de carros.
*/

//Simular carro

function randomNumber(arryaLength) {
  let randomNumber = Math.floor(Math.random() * arryaLength)
  return randomNumber
}

function carSimulation() {
  let brand = brands[ randomNumber(brands.length) ]
  let color = colors[ randomNumber(colors.length) ]
  let engineSize = engineSizes[ randomNumber(engineSizes.length) ]  
  let randomCar = [brand, color, engineSize]
  return randomCar
}

function Car(randomCar) {
  this.brand = randomCar[0]
  this.color = randomCar[1]
  this.engineSize = randomCar[2]
}
