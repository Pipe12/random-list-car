# Generar lista de carros de forma aleatoria.

Generar un lista de 30 objetos (carro). que utilice una funcion constructora y un loop para generar las nuevas instancias.

## pseudo codigo

1. Declaración de variables.
2. Simular carro.
3. Crear Nuevo carro.
4. Guardar en la lista de carros.
5. Uso el metodo .filter para determinar los carros de menos de 2000 cc
6. Uso el metodo .map para solo traer un listado de las marcas de los carros

```javascript
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

let carLess2000 = carList.filter(function(car) { 
  return car.engineSize <= 2000
})

let carBrands = carList.map(function(car) {
  return car.brand
})
```