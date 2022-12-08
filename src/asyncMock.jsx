const products = [
  {
    id: '1',
    name: 'Cortadora De Fiambres Comercial Moretti Trecento 300 Mm Inox',
    category: 'Equipamos tu comercio',
    image:"/assets/CORTADORA.png",
    price: 600,
    stock: 700,
    description: 'Construcción en aluminio pulido y acero inoxidable.'
  }, 
  {
    id: '2',
    name: 'Plancha Hamburguesera Electrica Segva 75x45cm Acero Inoxidable',
    image:"/assets/PLANCHA.png",
    category: 'Equipamos tu comercio',
    price: 450,
    stock: 500  ,
    description: ' Construida íntegramente en acero inoxidable esmerilado.'
  },
  {
    id: '3',
    name: 'Panchuquera Electrica 6 Moldes Panchukera Automatica',
    image:"/assets/PANCHUQUERA.png",
    category: 'Equipamos tu comercio',
    price: 250,
    stock: 1200,
    description: 'Construida íntegramente en acero inoxidable esmerilado.'
  },
  {
    id: '4',
    name: 'Anafe Eléctrico Vitrocerámico Yelmo An-9901 Negro 220v',
    image:"/assets/ANAFE.png",
    category: 'Equipamos tu hogar',
    price: 580,
    stock: 250,
    description: 'Sistema de calentamiento infrarrojo.'
  }, 
  {
    id: '5',
    name: 'Batidora Amasadora Planetaria Bowl Mesa Yelmo Bb-1106 1200w',
    image:"/assets/BATIDORA.png",
    category: 'Equipamos tu hogar',
    price: 800,
    stock: 120,
    description: 'Ideal para la preparar grandes cantidades de masa, crema, crema batida, espuma, etc.'
  },
  {
    id: '6',
    name: 'Horno Empotrable A Gas Con Grill Eléctrico Orbis 960apo 70l 220v',
    image:"/assets/Horno-Empotrable-2.png",
    category: 'Equipamos tu hogar',
    price: 1200,
    stock: 80,
    description: 'Medidas: Ancho (mm): 596 / Alto (mm): 593 / Profundidad (mm): 590.'
  },
  {
    id: '7',
    name: 'Guillotina Cizalla Rotativa 31cm A4 Portatil Corta Papel',
    image:"/assets/GRP-AMARILLA-Y-NEGRA-1.jpg",
    category: 'Equipamos tu oficina',
    price: 220,
    stock: 5000,
    description: 'Guillotina Cizalla Rotativa 31cm A4 Portatil Corta Papel.'
  }, 
  {
    id: '8',
    name: 'Aspiradora Yelmo As-3314 16l Plata Y Violeta 220v',
    image:"/assets/ASPIRADORA.png",
    category: 'Equipamos tu oficina',
    price: 900,
    stock: 40,
    description: '1200W.'
  },
  {
    id: '9',
    name: 'Parante Para Estantería Metálica 2 Metros Chapa Nº16, Nº18, Nº20',
    image:"/assets/ESTANTERIA.png",
    category: 'Equipamos tu oficina',
    price: 280,
    stock: 9000,
    description: 'Espesor: Chapa Nº16, Nº18 o Nº20.'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products.filter(product => product.category === categoryId))
  }, 500)
})
}

export const getProductsById = (productId) => {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products.find(product => product.id === productId))
  }, 500)
})
}
