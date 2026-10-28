// Crear arrays
const productos = ["Base", "Corrector", "Labial", "Rubor", "Sombras"];
const precios = [30000, 20000, 15000, 18000, 25000];

// Leer los arrays
console.log(productos[0]);
console.log(productos.length);

// Agregar un producto
productos.push("Rímel");
precios.push(22000);

// Quitar el último producto
productos.pop();
precios.pop();

// Buscar un producto
console.log(productos.includes("Labial"));

// Filtrar precios menores de $20000
const baratos = precios.filter(p => p < 20000);
console.log("Precios menores de $20000:", baratos);

// Calcular precios con IVA del 19 %
const conIva = precios.map(p => Math.round(p * 1.19));
console.log("Precios con IVA:", conIva);

// Mostrar productos en la página
const lista = document.getElementById("lista");

productos.forEach((producto, i) => {
    const elemento = document.createElement("li");
    elemento.textContent = producto + " - $" + precios[i];
    lista.appendChild(elemento);
});